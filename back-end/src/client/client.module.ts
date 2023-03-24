/*eslint-disable */
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prismar.service';
import { ClientService } from './client.service';

@Module({
  providers: [PrismaService, ClientService],
  exports: [ClientService]
})
export class ClientModule { }
