/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { Client, Prisma } from '@prisma/client';
import { PrismaService } from '../prismar.service';
import { hash } from 'bcrypt'
import { IClientResposne } from 'src/dtos/client.dto';
@Injectable()
export class ClientService {
    constructor(private prismaService: PrismaService) { }
    async createClient(data: Prisma.ClientCreateInput): Promise<Client> {
        data.password = await hash(data.password, 10)
        return this.prismaService.client.create({
            data,
        });
    }
    async findClientById(id: string): Promise<IClientResposne> {
        const currentClient = await this.prismaService.client.findUnique({
            where: { id: id }, include: { contacts: { select: { id: true, name: true, email: true } } }
        })
        const { password, ...rest } = currentClient
        const clientResponse = rest
        return rest
    }
    async findAndUpdateClientById(id: string, payload: Prisma.ClientUpdateInput): Promise<Client> {
        const currentClient = this.prismaService.client.update({ where: { id: id }, data: payload })
        return currentClient
    }
    async findOneByUserName(username: string): Promise<Client> {
        return this.prismaService.client.findUnique({ where: { username } })
    }
}
