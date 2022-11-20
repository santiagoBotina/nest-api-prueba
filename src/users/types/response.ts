import { ApiProperty } from '@nestjs/swagger';

export class RequestRide {
  @ApiProperty()
  status: string;
  @ApiProperty()
  create: {
    full_name: string;

    email: string;

    init_lat: string;

    init_long: string;

    final_lat: string;

    final_long: string;
  };
}

export class CreatePaymentMethod {
  @ApiProperty()
  full_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  wompi_payment_source_id: number;
  @ApiProperty()
  wompi_aceptance_token: string;
}
