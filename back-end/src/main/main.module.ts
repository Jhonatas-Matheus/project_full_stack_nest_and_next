import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ClientModule } from 'src/client/client.module';
import { ContactModule } from 'src/contact/contact.module';
import { ClientController } from './client-controller.controller';
import { ContactController } from './contact-controller.controller';

@Module({
  imports: [AuthModule, ClientModule, ContactModule],
  controllers: [ClientController, ContactController],
})
export class ControllersModule { }
