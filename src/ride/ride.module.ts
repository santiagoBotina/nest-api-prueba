import { RideRepository } from 'src/ride/repository/ride-repository';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { RideService } from './ride.service';

@Module({
  imports: [PrismaModule],
  providers: [RideService, RideRepository],
  exports: [RideService, RideRepository],
})
export class RideModule {}
