import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { ConfigModule } from '@nestjs/config';
import { EventModule } from './event/event.module';
import { FightModule } from './fight/fight.module';
import { FighterModule } from './fighter/fighter.module';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    DatabaseModule,
    EventModule,
    FightModule,
    FighterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
