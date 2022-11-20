import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RequestRideDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  init_lat: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  init_long: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  final_lat: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  final_long: string;
}
