import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt'
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ValidatedUser } from './interfaces/auth-user.type';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async validateUser (email: string, password: string): Promise<ValidatedUser> {
        const userInDb = await this.userService.findUserByEmail(email)

        if (!userInDb) throw new UnauthorizedException('No se encontró un usuario');

        //comparar contraseña
        if (!await compare(password, userInDb.password)) throw new UnauthorizedException('Email o contraseña inválidos')
        //Return username e email
        console.log(userInDb)
        return userInDb;
    }

    async generateJwt (user: ValidatedUser) {
        const { email, id } = user
        const payload = { username: email, sub: id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}