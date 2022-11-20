import { DriversService } from '../drivers.service';
import { TestingModule, Test } from '@nestjs/testing';
import { DriversController } from '../drivers.controller';

describe('DriversController', () => {
  let controller: DriversController;

  const mockDriversService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriversController],
      providers: [DriversService],
    })
      .overrideProvider(DriversService)
      .useValue(mockDriversService)
      .compile();

    controller = module.get<DriversController>(DriversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
