/*eslint-disable */
export interface IClientResposne {
    id: string;
    username: string;
    email: string;
    name: string;
    phone: string;
}
export interface IClientTokenJwt {
    username: string,
    sub: string,
    iat: number,
    exp: number
}
