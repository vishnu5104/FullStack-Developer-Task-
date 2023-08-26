import { Injectable } from '@nestjs/common';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fight } from '../fight/entities/fight.entity';
import { Repository } from 'typeorm';
@Injectable()
export class FightService {
  constructor(
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
  ) {}
  async create(createFightDto: CreateFightDto): Promise<Fight> {
    const fight = this.fightRepository.create(createFightDto);
    return this.fightRepository.save(fight);
  }
  async findAll(): Promise<Fight[]> {
    return this.fightRepository.find({ relations: ['fighter1', 'fighter2', 'winner'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} fight`;
  }

  update(id: number, updateFightDto: UpdateFightDto) {
    return `This action updates a #${id} fight`;
  }

  remove(id: number) {
    return `This action removes a #${id} fight`;
  }
}
