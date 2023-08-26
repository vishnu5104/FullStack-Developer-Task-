// src/fighter/fighter.entity.ts
import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import { Fight } from '../../fight/entities/fight.entity';
@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  fighter_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  nationality: string;

  @Column()
  weight_class: string;

  @Column()
  team: string;

  @Column({ default: 0 })
  wins: number;

  @Column({ default: 0 })
  losses: number;

  @Column({ default: 0 })
  knockouts: number;

  @Column({ default: 0 })
  submissions: number;

  @OneToMany(() => Fight, (fight) => fight.fighter1)
  fights_as_fighter1: Fight[];

  @OneToMany(() => Fight, (fight) => fight.fighter2)
  fights_as_fighter2: Fight[];
}
