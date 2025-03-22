import { Controller, Get, Param } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { Project } from '@core';

@Controller('projects')
export class ProjectController {
  constructor(private readonly repo: ProjectPrisma) {}

  @Get('')
  async getProjects(): Promise<Project[]> {
    return this.repo.getAll();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: number): Promise<Project | null> {
    return this.repo.getById(Number(id));
  }
}
