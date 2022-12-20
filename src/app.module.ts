import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { AuthModule } from './auth/auth.module';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UsersModule, DriversModule, AuthModule],
  providers: [LocalStrategy, AuthService, JwtService]
})
export class AppModule { }
