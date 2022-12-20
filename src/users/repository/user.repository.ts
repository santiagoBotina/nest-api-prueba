import { BadRequestException } from '@nestjs/common/exceptions';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) { }

  /*Este método solo toma el email enviado por el body para crear el usuario y guardar la informacion
  del metodo de pago*/
  async createUser (
    email: string,
    password: string,
    full_name: string,
    idPaymentMethod?: number,
    acceptance_token?: string,
  ) {
    const findinDb = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (findinDb)
      throw new BadRequestException('El usuario con este email ya existe');
    const hashPassword = await hash(password, 10);
    const createUser = await this.prisma.users.create({
      data: {
        full_name,
        password: hashPassword,
        email,
        wompi_payment_source_id: idPaymentMethod,
        wompi_aceptance_token: acceptance_token,
      },
    });
    delete createUser.id;
    return createUser;
  }

  async findOneUser (email: string) {
    const result = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!result) throw new BadRequestException('No se encontró un usuario');
    return result;
  }

  async findById (id: number) {
    const result = await this.prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (!result) throw new BadRequestException('No se encontró un usuario');
    return result;
  }

}
