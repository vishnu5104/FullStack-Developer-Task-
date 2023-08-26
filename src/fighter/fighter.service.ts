// src/fighter/fighter.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from './entities/fighter.entity';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { FighterStatisticsDto } from './dto/fighter-statistics.dto';


@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
  ) {}

  async findAll(): Promise<Fighter[]> {
    return this.fighterRepository.find();
  }

 


  async findOne(fighter_id: number): Promise<Fighter> {
    console.log('ithe id',fighter_id)
    const fighter = await this.fighterRepository.findOne({ where: { fighter_id } }); // Use findOne here
    if (!fighter) {
      throw new NotFoundException(`Fighter with ID ${fighter_id} not found`);
    }
    return fighter;
  }

  
  async getFighterStatistics(fighter_id: number): Promise<FighterStatisticsDto> {
    const fighter = await this.fighterRepository.findOne({where:{fighter_id }});
    if (!fighter) {
      throw new NotFoundException(`Fighter with ID ${fighter_id} not found`);
    }

    const statistics: FighterStatisticsDto = {
      wins: fighter.wins,
      losses: fighter.losses,
      knockouts: fighter.knockouts,
      submissions: fighter.submissions,
    };

    return statistics;
  }

  async create(createFighterDto: CreateFighterDto): Promise<Fighter> {
    const fighter = this.fighterRepository.create(createFighterDto);
    return this.fighterRepository.save(fighter);
  }

  async update(id: number, updateFighterDto: UpdateFighterDto): Promise<Fighter> {
    await this.fighterRepository.update(id, updateFighterDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const fighter = await this.findOne(id);
    await this.fighterRepository.remove(fighter);
  }
}
