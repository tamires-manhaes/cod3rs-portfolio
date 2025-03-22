import { Technology } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TechnologyPrisma {
  constructor(private readonly prisma: PrismaProvider) {}
  async getAll(): Promise<Technology[]> {
    return this.prisma.tecnologia.findMany();
  }

  async getPrincipals(): Promise<Technology[]> {
    return this.prisma.tecnologia.findMany({
      where: {
        principal: true,
      },
    });
  }
}
