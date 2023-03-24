/*eslint-disable */
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prismar.service';
import { ContactService } from './contact.service';

@Module({
  providers: [PrismaService, ContactService],
  exports: [ContactService]
})
export class ContactModule { }
