/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Client, Contact, Prisma } from '@prisma/client';
import { ClientService } from '../client/client.service';
import { PrismaService } from '../prismar.service';

@Injectable()
export class ContactService {
    constructor(private prismaService: PrismaService) { }
    async listAllContacts(id: string) {
        return this.prismaService.contact.findMany({ where: { ownerId: id } })
    }
    async createContact(data: Prisma.ContactCreateInput, dataJwt: any): Promise<Contact> {
        data.owner = {
            connect: { id: dataJwt.sub }
        }
        return this.prismaService.contact.create({
            data,
        })
    }
    async updateContact(payload: Prisma.ContactUpdateInput, id: string): Promise<Contact> {
        return this.prismaService.contact.update({ where: { id }, data: payload })
    }
    async deleteContact(id: string): Promise<void> {
        await this.prismaService.contact.delete({ where: { id } })
    }
}
