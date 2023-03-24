/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Client, Contact, Prisma } from '@prisma/client';
import { ClientService } from '../client/client.service';
import { PrismaService } from '../prismar.service';

@Injectable()
export class ContactService {
    constructor(private prismaService: PrismaService) { }
    async createContact(data: Prisma.ContactCreateInput, dataJwt: any): Promise<Contact> {
        data.owner = {
            connect: { id: dataJwt.sub }
        }
        return this.prismaService.contact.create({
            data,
        })
    }
}
