import { Controller, Post, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DriversService } from './drivers.service';
import { FinishRide } from './types';

@ApiTags('Drivers')
@Controller({ path: 'drivers', version: '1' })
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @ApiCreatedResponse({ type: FinishRide })
  @Post('finish-ride/:id')
  create(@Param('id') id: string) {
    return this.driversService.finishRide(+id);
  }
}
