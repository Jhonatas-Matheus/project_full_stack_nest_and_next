export interface IContactResponse {
    id: string;
    name: string;
    email: string;
    phone: string;
    ownerId: string;
}
export interface IContactRequest {
    email: string;
    name: string;
    phone: string;
}
