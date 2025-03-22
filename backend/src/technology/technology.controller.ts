import { Controller, Get } from '@nestjs/common';
import { Technology } from '@core';
import { TechnologyPrisma } from './technology.prisma';

@Controller('technologies')
export class TechnologyController {
  constructor(private readonly repo: TechnologyPrisma) {}
  @Get()
  async getTechnologies(): Promise<Technology[]> {
    return this.repo.getAll();
  }

  @Get('principals')
  async getPrincipals(): Promise<Technology[]> {
    return this.repo.getPrincipals();
  }
}
