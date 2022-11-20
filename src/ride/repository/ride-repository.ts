import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { InitRideDto } from '../dto/init-ride.dto';

@Injectable()
export class RideRepository {
  constructor(private prisma: PrismaService) {}

  async createRide(createRideDto: InitRideDto) {
    const result = await this.prisma.ride.create({
      data: createRideDto,
    });
    if (!result) throw new InternalServerErrorException();
    return result;
  }

  async finishRide(id: number) {
    const findInDb = await this.prisma.ride.findUnique({
      where: {
        id,
      },
    });
    if (!findInDb)
      throw new NotFoundException(
        `No se encontró ningun viaje con el id ${id}`,
      );
    if (findInDb.isFinished === 1) {
      throw new BadRequestException('El viaje ya fue completado');
    }

    const result = await this.prisma.ride.update({
      where: {
        id,
      },
      data: {
        isFinished: 1,
      },
    });

    return result;
  }

  async findFull(id: number) {
    const findInDb = await this.prisma.ride.findUnique({
      where: {
        id,
      },
      include: {
        Users: true,
      },
    });
    if (!findInDb)
      throw new NotFoundException(
        `No se encontró ningun viaje con el id ${id}`,
      );
    return findInDb;
  }
}
