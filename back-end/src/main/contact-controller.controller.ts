/*eslint-disable */
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Req,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, Client as ClientModel, Contact as ContactModel } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { ClientService } from 'src/client/client.service';
import { ContactService } from 'src/contact/contact.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IClientResposne } from 'src/dtos/client.dto';
@UseGuards(JwtAuthGuard)
@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }
    @Post('')
    async registerContact(
        @Body() postData: Prisma.ContactCreateInput, @Req() req
    ): Promise<ContactModel> {
        return this.contactService.createContact(postData, req.user);
    }
}
