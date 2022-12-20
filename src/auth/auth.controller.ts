import { ValidatedUser } from './interfaces/auth-user.type';
import { AuthService } from './auth.service';
import { ValidateUserDto } from './dto/validateUser.dto';
import { Controller, Request, Post, UseGuards, Body, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { hash } from 'bcrypt';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

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
    @Post('hashpassword')
    async hash (@Body() user: ValidateUserDto) {
        const { password } = user;
        const hashPass = hash(password, 10);
        return hashPass;
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile (@Req() req: IUserRequest) {
        return req.user;
    }
}