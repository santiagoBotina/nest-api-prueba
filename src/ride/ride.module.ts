import { RideRepository } from '../ride/repository/ride-repository';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../core/prisma/prisma.module';
import { RideService } from './ride.service';

@Module({
  imports: [PrismaModule],
  providers: [RideService, RideRepository],
  exports: [RideService, RideRepository],
})
export class RideModule {}
