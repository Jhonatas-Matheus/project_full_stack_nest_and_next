/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/client/client.service';
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private clientService: ClientService, private jwtService: JwtService) { }
    async validateUser(username: string, password: string): Promise<any> {
        const currentClient = await this.clientService.findOneByUserName(username)
        if (currentClient && await compare(password, currentClient.password)) {
            const { password, ...res } = currentClient
            return res
        }
        return null
    }
    async login({ user }: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            // ...payload
            access_token: this.jwtService.sign(payload)
        }
    }

}
