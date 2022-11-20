import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { createPaymentDto } from './dto/create-payment-user.dto';
import { RequestRideDto } from './dto/requestRideDto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreatePaymentMethod, RequestRide } from './types/response';

@ApiTags('Users (riders)')
@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Crea el método de pago con la API de Wompi y la guarda en base de datos
  @ApiCreatedResponse({ type: CreatePaymentMethod })
  @Post('payment-method')
  async createPaymentMethod(@Body() createPaymentDto: createPaymentDto) {
    return this.usersService.createPaymentMethod(createPaymentDto);
  }

  //Crea el método de pago con la API de Wompi y la guarda en base de datos
  @ApiCreatedResponse({ type: RequestRide })
  @Post('request-ride')
  async requestRide(@Body() requestRide: RequestRideDto) {
    return this.usersService.requestRide(requestRide);
  }
}
