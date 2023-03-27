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
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { ClientService } from 'src/client/client.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IClientResposne, IClientTokenJwt } from 'src/dtos/client.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Controller('client')
export class ClientController {
    constructor(
        private clientService: ClientService,
        private authService: AuthService,
    ) { }


    @Post('')
    async signUpClient(@Body() postData: Prisma.ClientCreateInput, @Res() res: Response): Promise<Response<IClientResposne>> {
        try {
            const responseData = await this.clientService.createClient(postData)
            return res.status(HttpStatus.CREATED).json(responseData)
        } catch (error) {
            if (error.message.includes('Unique constraint failed')) {
                return res.status(HttpStatus.CONFLICT).json({ message: "Username is already in use." })
            } else {
                return res.status(HttpStatus.BAD_REQUEST).json({ message: "Something went wrong, please try again soon." })
            }
        }
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async signInClient(@Req() payload, @Res() res: Response): Promise<Response<any>> {
        const responseData = await this.authService.login(payload)
        return res.status(HttpStatus.OK).json(responseData)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('')
    async updateClient(@Req() req: any, @Body() payload: Prisma.ClientUpdateInput, @Res() res: Response): Promise<Response<IClientResposne>> {
        const jwtData: IClientTokenJwt = req.user
        try {
            const responseData = await this.clientService.findAndUpdateClientById(jwtData.sub, payload)
            return res.status(HttpStatus.ACCEPTED).json(responseData)
        } catch (error) {
            if (error.message.includes('Record to update not found.')) {
                return res.status(HttpStatus.BAD_REQUEST).send({ message: "The user you want to update does not exist" })
            }
            console.log(error.message)
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('')
    async getClientById(@Req() req, @Res() res: Response): Promise<Response<IClientResposne>> {
        const jwtData: IClientTokenJwt = req.user
        console.log(req)
        try {
            const responseData = await this.clientService.findClientById(jwtData.sub)
            return res.status(HttpStatus.OK).json(responseData)
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: "The user you went to list does not exist" })
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('')
    async deleteClientById(@Req() req, @Res() res: Response) {
        const jwtData: IClientTokenJwt = req.user
        try {
            const responseData = await this.clientService.findAnDeleteClientById(jwtData.sub)
            return res.status(HttpStatus.NO_CONTENT).send()
        } catch (error) {
            if (error.message.includes('Record to delete does not exist.'))
                return res.status(HttpStatus.BAD_REQUEST).send({ message: "The user you want to delete does not exist" })
        }
    }
}

