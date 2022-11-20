import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createPaymentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
