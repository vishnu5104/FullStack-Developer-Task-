// src/fight/fight.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Event } from '../../event/entities/event.entity'
import { Fighter } from 'src/fighter/entities/fighter.entity';

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  fight_id: number;

  @ManyToOne(() => Event, (event) => event.fights)
  event: Event;

  @ManyToOne(() => Fighter, (fighter) => fighter.fights_as_fighter1)
  fighter1: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.fights_as_fighter2)
  fighter2: Fighter;

  @ManyToOne(() => Fighter, { nullable: true })
  winner: Fighter;

  @Column()
  outcome_description: string;


  
}
