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
@Controller('client')
export class ClientController {
    constructor(
        private clientService: ClientService,
        private authService: AuthService,
    ) { }
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async getClientById(@Req() req, @Param('id') id: string): Promise<IClientResposne> {
        return this.clientService.findClientById(id);
    }
    @Post('')
    async signUpClient(
        @Body() postData: Prisma.ClientCreateInput,
    ): Promise<ClientModel> {
        const { password, ...res } = await this.clientService.createClient(
            postData,
        );
        return res as ClientModel;
    }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() payload) {
        return this.authService.login(payload)
    }
}

