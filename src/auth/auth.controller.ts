import { ValidatedUser } from './interfaces/auth-user.type';
import { AuthService } from './auth.service';
import { Controller, Request, Post, UseGuards, Body, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateuserDto } from './dto/createUser.dto';

export interface IUserRequest extends Request {
    user: ValidatedUser
}

@Controller({ path: 'auth', version: '1' })
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login (@Req() req: IUserRequest) {
        return this.authService.generateJwt(req.user);
    }
    @Post('signup')
    async signUp (@Body() userData: CreateuserDto) {
        return this.authService.signUp(userData);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile (@Req() req: IUserRequest) {
        return req.user;
    }
}