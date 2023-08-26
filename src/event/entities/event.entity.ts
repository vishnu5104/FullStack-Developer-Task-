// src/event/event.entity.ts
import { Entity, PrimaryGeneratedColumn, Column , OneToMany} from 'typeorm';
import { Fight } from '../../fight/entities/fight.entity';
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  event_id: number;

  @Column()
  event_name: string;

  @Column()
  location: string;

  @Column()
  date: Date;

  @OneToMany(() => Fight, (fight) => fight.event)
  fights: Fight[]; // Define the 'fights' property here
}
