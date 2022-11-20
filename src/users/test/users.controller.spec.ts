import { TestingModule, Test } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { UsersController } from './../users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUserService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
