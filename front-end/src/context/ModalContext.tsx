"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react";


interface IModalContextProps{
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    typeModal: TypeModal | undefined
    setTypeModal: Dispatch<SetStateAction<TypeModal | undefined>>

}

interface IModalContextParams{
    children: React.ReactNode
}

type TypeModal = "editProfile" | "excludeProfile" | "editContact" | "excludeContact" | "createContact" | ""

export const ModalContext = createContext({} as IModalContextProps )



export const ModalProvider = ({children}: IModalContextParams) =>{

    const [showModal, setShowModal] = useState<boolean>(false)

    const [typeModal, setTypeModal] = useState<TypeModal>()
    return(
        <ModalContext.Provider value={{
            showModal,
            setShowModal,
            typeModal,
            setTypeModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}