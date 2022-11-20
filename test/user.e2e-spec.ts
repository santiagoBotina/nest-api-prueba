import { TokenizedCard } from './../dist/Wompi/interfaces/index.d';
import { WompiService } from '../src/Wompi/wompi.service';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../src/users/users.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  const mockWompiService = {
    TokenizedCard() {},
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(WompiService)
      .useValue(mockWompiService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users/payment-method (POST)', () => {
    return request(app.getHttpServer())
      .post('/users/payment-method')
      .expect(201);
  });
});
