import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { PrismaModule } from '../core/prisma/prisma.module';
import { DriverRepository } from './repository/driver.repository';
import { RideService } from '../ride/ride.service';
import { RideRepository } from '../ride/repository/ride-repository';
import { DriversController } from './drivers.controller';
import { WompiService } from '../Wompi/wompi.service';

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
