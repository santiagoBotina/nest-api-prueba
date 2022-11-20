import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DriversService } from '../drivers/drivers.service';
import { RideService } from '../ride/ride.service';
import { WompiService } from '../Wompi/wompi.service';
import { RequestRideDto } from './dto/requestRideDto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private wompiService: WompiService,
    private userRepository: UserRepository,
    private rideService: RideService,
    private readonly driversService: DriversService,
  ) {}

  async createPaymentMethod({ email, full_name }) {
    //Tokenizar tarjeta
    const { data, status } = await this.wompiService.tokenizedCardUser();
    if (status !== 'CREATED') {
      throw new InternalServerErrorException(
        'Ocurrió un error al generar el método de pago',
      );
    }
    //Crear metodo de pago
    const { id, acceptance_token } = await this.wompiService.paymentMethodUser(
      data.id,
    );

    //Crear usuario con email y metodo de pago
    const createUser = await this.userRepository.createUser(
      email,
      full_name,
      id,
      acceptance_token,
    );

    return createUser;
  }

  async requestRide(requestRide: RequestRideDto) {
    const { email } = requestRide;
    //Como no se cuenta con un proceso de autenticación, se tomará la info del body
    //User
    const { id: userId } = await this.userRepository.findOneUser(email);
    //Driver
    const { id: driverId } = await this.driversService.findOne();
    //Iniciar proceso en la base de datos
    const initRide = await this.rideService.initRide(
      requestRide,
      userId,
      driverId,
    );
    if (!initRide)
      throw new BadRequestException('Ocurrió un error al iniciar el viaje');
    return initRide;
  }

  async findUser(id: number) {
    const { wompi_payment_source_id, wompi_aceptance_token, email } =
      await this.userRepository.findById(id);
    return {
      wompi_payment_source_id,
      wompi_aceptance_token,
      email,
    };
  }
}
