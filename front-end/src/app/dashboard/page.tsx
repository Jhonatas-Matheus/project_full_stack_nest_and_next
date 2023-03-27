"use client"
import { CardContact } from "@/components/card-contact"
import { CardContactContainer } from "@/components/cards-contact-container"
import { Navbar } from "@/components/navbar"
import { AuthContext } from "@/context/AuthContext"
import { useRequest } from "@/hooks/useRequests"
import { IContactResponse } from "@/interfaces/contact.interfaces"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"



export default function DashboardPage() {
    const { profile, setToken, trigger } = useContext(AuthContext)
    const router = useRouter()
    const [contacts, setContacts] = useState<IContactResponse[]>()
    const { handleContacts } = useRequest()
    useEffect(() => {
        const getListContacts = async () => {
            console.log(await handleContacts("listAll"))
            setContacts(await handleContacts("listAll"))
        }
        getListContacts()
    }, [])
    if (!profile) {
        router.push('/login')
        return (<h1>Carregando</h1>)
    }
    return (
        <>
            <Navbar />
            <CardContactContainer>
                {contacts?.map((contact) => (
                    <CardContact cardContact={contact} key={contact.id} id={contact.id} />
                ))}
            </CardContactContainer>
        </>
    )
}