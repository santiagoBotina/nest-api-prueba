import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { createPaymentDto } from './dto/create-payment-user.dto';
import { RequestRideDto } from './dto/requestRideDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Crea el método de pago con la API de Wompi y la guarda en base de datos
  @Post('payment-method')
  async createPaymentMethod(@Body() createPaymentDto: createPaymentDto) {
    return this.usersService.createPaymentMethod(createPaymentDto);
  }

  //Crea el método de pago con la API de Wompi y la guarda en base de datos
  @Post('request-ride')
  async requestRide(@Body() requestRide: RequestRideDto) {
    return this.usersService.requestRide(requestRide);
  }
}
