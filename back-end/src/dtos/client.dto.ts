/*eslint-disable */
export interface IClientResposne {
    id: string;
    email: string;
    created_at: Date;
    name: string;
    phone: string;
}
export interface IClientTokenJwt {
    username: string,
    sub: string,
    iat: number,
    exp: number
}
