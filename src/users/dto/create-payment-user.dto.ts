import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createPaymentDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
