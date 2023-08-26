// src/fighter/fighter.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';


@Controller('fighters')
export class FighterController {
  constructor(private readonly fighterService: FighterService) {}

  @Get()
  async findAll() {
    return this.fighterService.findAll();
  }

  @Get(':fighter_id')
  async findOne(@Param('fighter_id') fighter_id: number) {
    return this.fighterService.findOne(fighter_id);
  }

  @Get(':fighter_id/statistics')
  async getFighterStatistics(@Param('fighter_id') id: number) {
    return this.fighterService.getFighterStatistics(id);
  }

  @Post()
  async create(@Body() createFighterDto: CreateFighterDto) {
    return this.fighterService.create(createFighterDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateFighterDto: UpdateFighterDto) {
    return this.fighterService.update(id, updateFighterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.fighterService.remove(id);
  }
}
