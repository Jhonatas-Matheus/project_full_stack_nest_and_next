import { IContactResponse } from "@/interfaces/contact.interfaces"
import { StyledCardContact } from "./style"

interface ICardContactProps {
    id: string
    cardContact: IContactResponse
}

export const CardContact = ({ cardContact, id }: ICardContactProps) => {
    return (
        <StyledCardContact id={id}>
            <div className="contact-info">
                <p><span>Email:</span> {cardContact.email}</p>
                <p><span>Nome:</span> {cardContact.name}</p>
                <p><span>Telefone:</span> {cardContact.phone}</p>
            </div>
            <div className="contact-controllers">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <button><img src="./assets/icon-pencil.svg" alt="Ícone de laṕis." /></button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <button><img src="./assets/icon-trash.svg" alt="Ícone de lixeira." /></button>
            </div>
        </StyledCardContact>


    )
}