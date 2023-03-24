/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { Client, Prisma } from '@prisma/client';
import { PrismaService } from '../prismar.service';
import { hash } from 'bcrypt'
import { IClientResposne } from 'src/dtos/client.dto';
@Injectable()
export class ClientService {
    constructor(private prismaService: PrismaService) { }
    async createClient(data: Prisma.ClientCreateInput): Promise<IClientResposne> {
        data.password = await hash(data.password, 10)
        const currentClient = await this.prismaService.client.create({
            data,
        })
        const { password, ...res } = currentClient
        return res;
    }
    async findClientById(id: string): Promise<IClientResposne> {
        const currentClient = await this.prismaService.client.findUniqueOrThrow({
            where: { id: id }, include: { contacts: { select: { id: true, name: true, email: true } } }
        })
        const { password, ...res } = currentClient
        return res
    }
    async findAndUpdateClientById(id: string, payload: Prisma.ClientUpdateInput): Promise<IClientResposne> {
        if (typeof (payload.password) === 'string') {
            payload.password = await hash(payload.password, 10)
        }
        const currentClient = await this.prismaService.client.update({ where: { id: id }, data: payload })
        const { password, ...res } = currentClient
        return res
    }
    async findOneByUserName(username: string): Promise<Client> {
        return this.prismaService.client.findUnique({ where: { username } })
    }
    async findAnDeleteClientById(id: string) {
        return this.prismaService.client.delete({ where: { id } })
    }
}
