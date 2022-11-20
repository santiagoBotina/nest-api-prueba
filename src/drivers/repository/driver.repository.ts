import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class DriverRepository {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const result = await this.prisma.drivers.findMany();
    if (!result) throw new NotFoundException();
    return result;
  }
}
