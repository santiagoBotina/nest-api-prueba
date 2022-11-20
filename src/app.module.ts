import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [UsersModule, DriversModule],
})
export class AppModule {}
