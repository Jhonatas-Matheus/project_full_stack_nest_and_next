"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react";


interface IModalContextProps{
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    typeModal: TypeModal | undefined
    setTypeModal: Dispatch<SetStateAction<TypeModal | undefined>>
    currentIdContact: string | undefined
    setCurrentIdContact: Dispatch<SetStateAction<string | undefined>>
    entityModal: EntityModal | undefined
    setEntityModal: Dispatch<SetStateAction<EntityModal | undefined>>
}

interface IModalContextParams{
    children: React.ReactNode
}

type TypeModal = "editProfile" | "excludeProfile" | "editContact" | "excludeContact" | "createContact" | ""
type EntityModal = "client" | "contact"
export const ModalContext = createContext({} as IModalContextProps )



export const ModalProvider = ({children}: IModalContextParams) =>{

    const [showModal, setShowModal] = useState<boolean>(false)

    const [typeModal, setTypeModal] = useState<TypeModal>()

    const [entityModal, setEntityModal] = useState<EntityModal>()

    const [currentIdContact, setCurrentIdContact] = useState<string>()
    return (
      <ModalContext.Provider
        value={{
          showModal,
          setShowModal,
          typeModal,
          setTypeModal,
          currentIdContact,
          setCurrentIdContact,
          entityModal,
          setEntityModal
        }}
      >
        {children}
      </ModalContext.Provider>
    );
}