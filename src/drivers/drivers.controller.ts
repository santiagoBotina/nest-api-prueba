import { Controller, Post, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post('finish-ride/:id')
  create(@Param('id') id: string) {
    return this.driversService.finishRide(+id);
  }
}
