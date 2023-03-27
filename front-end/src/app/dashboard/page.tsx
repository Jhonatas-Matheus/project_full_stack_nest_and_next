"use client"
import { Navbar } from "@/components/navbar"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useContext } from "react"



export default function DashboardPage() {
    const { profile, setToken, trigger } = useContext(AuthContext)
    const router = useRouter()
    if (!profile) {
        router.push('/login')
        return (<h1>Carregando</h1>)
    }
    // console.log(profile)
    return (
        <>
            <Navbar />
            <h1>Aqui é a pagina dashbaord</h1>
            <button onClick={() => {
                localStorage.removeItem('project_full_stack:token')
                setToken("")
                // router.push('/login')
            }}>Logout</button>
        </>
    )
}