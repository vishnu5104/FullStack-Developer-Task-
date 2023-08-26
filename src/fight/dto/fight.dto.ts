// src/fight/dto/fight.dto.ts
import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';


export enum FighterResult {
  Win = 'win',
  Loss = 'loss',
  Draw = 'draw',
}

export class CreateFightDto {
  @IsNotEmpty()
  @IsNumber()
  event_id: number;

  @IsNotEmpty()
  @IsNumber()
  fighter1_id: number;

  @IsNotEmpty()
  @IsNumber()
  fighter2_id: number;

  @IsNumber()
  winner_id: number;

  @IsNotEmpty()
  @IsString()
  outcome_description: string;

  @IsNotEmpty()
  @IsEnum(FighterResult)
  fighter1_result: FighterResult;

  @IsNotEmpty()
  @IsEnum(FighterResult)
  fighter2_result: FighterResult;
}
