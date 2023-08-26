// src/fighter/dto/fighter.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFighterDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsString()
  nationality: string;

  @IsString()
  weight_class: string;

  @IsString()
  team: string;

  @IsNumber()
  wins: number;

  @IsNumber()
  losses: number;

  @IsNumber()
  knockouts: number;

  @IsNumber()
  submissions: number;
}

export class UpdateFighterDto extends CreateFighterDto {}
