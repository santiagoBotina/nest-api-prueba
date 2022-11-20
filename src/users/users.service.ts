import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { WompiService } from 'src/Wompi/wompi.service';
import { createPaymentDto } from './dto/create-payment-user.dto';

@Injectable()
export class UsersService {
  constructor(private wompiService: WompiService) {}

  async createPaymentMethod(createUserDto: createPaymentDto) {
    //Tokenizar tarjeta
    const { data, status } = await this.wompiService.tokenizedCardUser();
    if (status !== 'CREATED') {
      throw new InternalServerErrorException(
        'Ocurrió un error al generar el método de pago',
      );
    }
    //Crear metodo de pago
    const { id } = await this.wompiService.paymentMethodUser(data.id);

    return test;
  }
}
