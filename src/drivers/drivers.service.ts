import { Injectable } from '@nestjs/common';
import { RideService } from 'src/ride/ride.service';
import { WompiService } from 'src/Wompi/wompi.service';
import { DriverRepository } from './repository/driver.repository';
import * as randomstring from 'randomstring';

@Injectable()
export class DriversService {
  constructor(
    private driverRepository: DriverRepository,
    private rideService: RideService,
    private wompiService: WompiService,
  ) {}
  //Encuentra un conductor al azar segun su ID
  async findOne() {
    const drivers = await this.driverRepository.findAll();
    const randomDriver = drivers.sort(() => Math.random() - 0.5);
    return randomDriver[0];
  }

  calculateTotalCostInCents(timeDifference: number, distance_in_km: number) {
    const VAL_PER_KM = 1000;
    const VAL_PER_MIN = 200;
    const BASE_FEE = 3500;

    const totalCost =
      (BASE_FEE + VAL_PER_KM * distance_in_km + VAL_PER_MIN * timeDifference) *
      100;

    return totalCost;
  }

  async finishRide(id: number) {
    const { created_at, updated_at, distance_in_km, user_id } =
      await this.rideService.finishRide(id);
    //Convirtiendo a minutos la diferencia entre los tiempos
    let timeDifference =
      (updated_at.getTime() - created_at.getTime()) / 1000 / 60;
    timeDifference = Math.abs(Math.round(timeDifference));

    const cost = this.calculateTotalCostInCents(timeDifference, distance_in_km);
    const rideInfo = await this.rideService.getRideInfo(id);

    const reference = randomstring.generate();

    const CREATE_TRANSACTION_DATA = {
      amount_in_cents: cost,
      currency: 'COP',
      customer_email: rideInfo.Users.email,
      payment_method: {
        installments: 1,
      },
      reference,
      payment_source_id: rideInfo.Users.wompi_payment_source_id,
    };

    const createTransaction = await this.wompiService.transactionInit(
      CREATE_TRANSACTION_DATA,
    );

    return createTransaction;
  }
}
