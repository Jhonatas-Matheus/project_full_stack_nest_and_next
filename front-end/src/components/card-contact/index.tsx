import { ModalContext } from "@/context/ModalContext"
import { IContactResponse } from "@/interfaces/contact.interfaces"
import { useContext } from "react"
import { StyledCardContact } from "./style"

interface ICardContactProps {
    id: string
    cardContact: IContactResponse
}

export const CardContact = ({ cardContact, id }: ICardContactProps) => {
    const {setShowModal,setTypeModal, setCurrentIdContact ,setEntityModal} = useContext(ModalContext)
    const handleOpenModalEditContact = () =>{
        setShowModal(true)
        setEntityModal("contact")
        setTypeModal("editContact")
    }
    const handleOpenModalExcludeContact = () =>{
        setShowModal(true)
        setEntityModal("contact")
        setTypeModal("excludeContact")
    }
    return (
        <StyledCardContact id={id}>
            <div className="contact-info">
                <p><span>Email:</span> {cardContact.email}</p>
                <p><span>Nome:</span> {cardContact.name}</p>
                <p><span>Telefone:</span> {cardContact.phone}</p>
            </div>
            <div className="contact-controllers">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <button onClick={()=>{
                    handleOpenModalEditContact()
                    setCurrentIdContact(cardContact.id)
                }}><img src="./assets/icon-pencil.svg" alt="Ícone de laṕis." /></button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <button onClick={()=>{
                    handleOpenModalExcludeContact()
                    setCurrentIdContact(cardContact.id)
                }
                    }><img src="./assets/icon-trash.svg" alt="Ícone de lixeira." /></button>
            </div>
        </StyledCardContact>


    )
}