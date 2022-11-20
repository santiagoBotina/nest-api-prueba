import { DriverRepository } from './../drivers/repository/driver.repository';
import { RideRepository } from 'src/ride/repository/ride-repository';
import { DriversModule } from 'src/drivers/drivers.module';
import { DriversService } from 'src/drivers/drivers.service';
import { WompiService } from './../Wompi/wompi.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { RideService } from 'src/ride/ride.service';

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
