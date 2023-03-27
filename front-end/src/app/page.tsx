"use client"
import { Container } from "@/components/container";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";






export default function Home() {
    const { profile } = useContext(AuthContext)
    const router = useRouter()
    if (!profile) {
        router.push('/dashboard')
    }
    return <Container>
        <h1>Testando</h1>
    </Container>
}