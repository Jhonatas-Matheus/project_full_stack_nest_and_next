export interface IClienteLogin {
    username: string,
    password: string
}
export interface IClientRegister {
    email: string
    name: string
    phone: string
    username: string
    password: string
}
export interface IClientEditRequest {
    email?: string
    name?: string
    phone?: string
    username?: string
    password?: string
}

export interface IClientEditResponse {
    id:         string;
    username:   string;
    created_at: string;
    email:      string;
    name:       string;
    phone:      string;
}

export interface IClientRegisterResponse {
    id:         string;
    username:   string;
    created_at: string;
    email:      string;
    name:       string;
    phone:      string;
}
