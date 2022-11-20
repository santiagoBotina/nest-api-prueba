import { DriverRepository } from './../drivers/repository/driver.repository';
import { RideRepository } from '../ride/repository/ride-repository';
import { DriversModule } from '../drivers/drivers.module';
import { DriversService } from '../drivers/drivers.service';
import { WompiService } from './../Wompi/wompi.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from '../core/prisma/prisma.module';
import { RideService } from '../ride/ride.service';

@Module({
  imports: [PrismaModule, DriversModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,
    WompiService,
    RideService,
    RideRepository,
    DriversService,
    DriverRepository,
  ],
  exports: [UsersService, UserRepository],
})
export class UsersModule {}
