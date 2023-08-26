// src/fight/dto/fight.dto.ts
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateFightDto {
  @IsNotEmpty()
  @IsString()
  outcome_description: string;

  @IsNotEmpty()
  eventId: number;

  @IsNotEmpty()
  fighter1Id: number;

  @IsNotEmpty()
  fighter2Id: number;

  @IsOptional()
  winnerId: number;
}
