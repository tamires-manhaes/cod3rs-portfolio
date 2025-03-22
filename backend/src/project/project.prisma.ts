/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Project } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjectPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Project[]> {
    return (await this.prisma.projeto.findMany()) as any;
  }

  async getById(id: number): Promise<Project | null> {
    return (await this.prisma.projeto.findUnique({
      where: {
        id,
      },
      include: { tecnologias: true },
    })) as any;
  }
}
