import { ModalContext } from "@/context/ModalContext"
import { AnimatePresence } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { StyledModalGeneric } from "./style"


interface IModalGenericParams{
    children: React.ReactNode
}

export const ModalGeneric = ({children}: IModalGenericParams) =>{
    const {showModal, setShowModal, setTypeModal} = useContext(ModalContext)
    return (
      <AnimatePresence>
        {showModal && (
          <StyledModalGeneric
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="bg-modal"
              onClick={() => {
                setTypeModal("");
              }}
            ></div>
            <div className="content">{children}</div>
          </StyledModalGeneric>
        )}
      </AnimatePresence>
    );
}