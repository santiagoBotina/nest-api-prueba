import { ApiProperty } from '@nestjs/swagger';

export class FinishRide {
  @ApiProperty()
  id: string;
  @ApiProperty()
  created_at: string;
  @ApiProperty()
  finalized_at: string;
  @ApiProperty()
  amount_in_cents: number;
  @ApiProperty()
  reference: string;
  @ApiProperty()
  customer_email: string;
  @ApiProperty()
  currency: string;
  @ApiProperty()
  payment_method_type: string;
  @ApiProperty()
  payment_method: {
    type: string;
    extra: {
      bin: string;
      name: string;
      brand: string;
      exp_year: string;
      exp_month: string;
      last_four: string;
      card_holder: string;
    };
    installments: number;
  };
  @ApiProperty()
  status: string;
  @ApiProperty()
  status_message: string;
  @ApiProperty()
  billing_data: string;
  @ApiProperty()
  shipping_address: string;
  @ApiProperty()
  redirect_url: string;
  @ApiProperty()
  payment_source_id: number;
  @ApiProperty()
  payment_link_id: string;
  @ApiProperty()
  customer_data: string;
  @ApiProperty()
  bill_id: string;
  @ApiProperty()
  taxes: string[];
}
