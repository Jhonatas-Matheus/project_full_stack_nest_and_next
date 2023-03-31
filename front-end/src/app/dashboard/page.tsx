"use client"
import { CardContact } from "@/components/card-contact"
import { CardContactContainer } from "@/components/cards-contact-container"
import { Navbar } from "@/components/navbar"
import { AuthContext } from "@/context/AuthContext"
import { ModalContext } from "@/context/ModalContext"
import { useRequest } from "@/hooks/useRequests"
import { IContactResponse } from "@/interfaces/contact.interfaces"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { ControlPanel } from "../../components/control-panel"

import { Loading } from "@/components/loading"
import { ModalProfile } from "@/components/modal-profile"
import { ModalConact } from "@/components/modal-contact"



export default function DashboardPage() {

  const { profile, setToken, trigger } = useContext(AuthContext)
  const router = useRouter()
  const [contacts, setContacts] = useState<IContactResponse[]>()
  const { handleContacts } = useRequest()
  const {entityModal} = useContext(ModalContext)
  useEffect(() => {
      const getListContacts = async () => {
          setContacts(await handleContacts("listAll"))
      }
      if(profile){

        getListContacts()
      }
  }, [])
    if (!profile) {
      if(typeof window !== 'undefined' && window.location){
        router.push('/')
      }
        return <Loading/>
    }


    return (
      <>
        <Navbar />
        {/* Aqui ira ficar a barra de controle de pesquisa e criar contato */}
        <ControlPanel />
        {/* Aqui ira ficar a barra de controle de pesquisa e criar contato */}
        <CardContactContainer>
          {contacts?.map((contact) => (
            <CardContact
              cardContact={contact}
              key={contact.id}
              id={contact.id}
            />
          ))}
        </CardContactContainer>
        {entityModal === "client" ? (
          <ModalProfile />
        ) : (
          <ModalConact setContacts={setContacts} />
        )}
      </>
    );
}
