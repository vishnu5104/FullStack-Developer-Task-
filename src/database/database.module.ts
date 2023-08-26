import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory:(configService:ConfigService) =>({
                type: "postgres",
                host: process.env.POSTGRES_HOST,
                port: parseInt(<string>process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                autoLoadEntities: true,
                synchronize: true  // Turn off in production
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}
