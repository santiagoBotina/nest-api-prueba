import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RequestRideDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  init_lat: string;
  @IsString()
  @IsNotEmpty()
  init_long: string;
  @IsString()
  @IsNotEmpty()
  final_lat: string;
  @IsString()
  @IsNotEmpty()
  final_long: string;
}
