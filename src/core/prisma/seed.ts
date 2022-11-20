import { drivers } from './drivers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (const driver of drivers) {
    await prisma.drivers.create({
      data: driver,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
