import { UsersModule } from './../users/users.module';
import { UserRepository } from './../users/repository/user.repository';
import { UsersService } from 'src/users/users.service';
import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { DriverRepository } from './repository/driver.repository';
import { RideService } from 'src/ride/ride.service';
import { RideRepository } from 'src/ride/repository/ride-repository';
import { DriversController } from './drivers.controller';
import { WompiService } from 'src/Wompi/wompi.service';

@Module({
  imports: [PrismaModule],
  controllers: [DriversController],
  providers: [
    DriversService,
    DriverRepository,
    RideService,
    RideRepository,
    WompiService,
  ],
  exports: [DriversService, DriverRepository],
})
export class DriversModule {}
