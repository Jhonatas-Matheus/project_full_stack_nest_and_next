/*eslint-disable */
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Patch,
    Post,
    Req,
    Res,
    UseFilters,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, Client as ClientModel, Contact as ContactModel, Contact } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { ClientService } from 'src/client/client.service';
import { ContactService } from 'src/contact/contact.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IClientResposne, IClientTokenJwt } from 'src/dtos/client.dto';
@UseGuards(JwtAuthGuard)
@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @Get()
    async listAllContactsOfClient(@Req() req, @Res() res: Response): Promise<Response<Contact[]>> {
        const jwtData: IClientTokenJwt = req.user
        return res.status(HttpStatus.OK).json(await this.contactService.listAllContacts(jwtData.sub))

    }

    @Post()
    async createContact(@Body() postData: Prisma.ContactCreateInput, @Req() req, @Res() res: Response): Promise<Response<ContactModel>> {
        return res.status(HttpStatus.CREATED).json(await this.contactService.createContact(postData, req.user))
    }
    @Patch('/:id')
    async updateContact(@Body() payload: Prisma.ContactUpdateInput, @Param('id') id: string, @Req() req, @Res() res: Response): Promise<Response<ContactModel>> {
        try {
            const responseData = await this.contactService.updateContact(payload, id)
            return res.status(HttpStatus.OK).json(responseData)
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: error.meta.cause })
        }

    }
    @Delete('/:id')
    async deleteContact(@Param('id') id: string, @Req() req, @Res() res: Response) {
        const jwtData: IClientTokenJwt = req.user
        try {
            await this.contactService.deleteContact(id)
            return res.status(HttpStatus.NO_CONTENT).send()
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: error.meta.cause })
        }
    }
}
