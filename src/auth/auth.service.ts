import { CreateuserDto } from './dto/createUser.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt'
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ValidatedUser } from './interfaces/auth-user.type';
import { Users } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async validateUser (email: string, password: string): Promise<ValidatedUser> {
        const userInDb = await this.userService.findUserByEmail(email)

        if (!userInDb) throw new UnauthorizedException('No se encontró un usuario');

        //comparar contraseña
        if (!await compare(password, userInDb.password)) throw new UnauthorizedException('Email o contraseña inválidos')
        //Return username e email
        return userInDb;
    }

    async generateJwt (user: ValidatedUser): Promise<{ access_token: string }> {
        const { email, id } = user
        const payload = { username: email, sub: id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async signUp (userData: CreateuserDto): Promise<Users> {
        return await this.userService.createUser(userData)
    }
}