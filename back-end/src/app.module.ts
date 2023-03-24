/* eslint-disable*/
import { Module } from '@nestjs/common';
import { ClientService } from './client/client.service';
import { ClientModule } from './client/client.module';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { PrismaService } from './prismar.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ControllersModule } from './main/main.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ControllersModule, ConfigModule.forRoot({
    envFilePath: ['../.env'],
    isGlobal: true
  })],
  providers: [],
})
export class AppModule { }
