import { WompiService } from './../Wompi/wompi.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, WompiService],
})
export class UsersModule {}
