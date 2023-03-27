import { AuthContext } from "@/context/AuthContext"
import { IClienteLogin, IClientRegister } from "@/interfaces/client.interfaces"
import { api } from "@/services/api"
import { handleToastfy } from "@/utils/toastfy.helper"
import axios, { AxiosError } from "axios"
import { useContext, useState } from "react"
import { toast } from "react-toastify"



export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>()
    const { setProfile, setToken } = useContext(AuthContext)
    const hadnleLogin = async (payload: IClienteLogin) => {
        setLoading(true)
        try {
            const response = await api.post('/client/login', payload)
            localStorage.setItem('project_full_stack:token', response.data.access_token)
            setToken(response.data.access_token)
            handleToastfy({ typeToast: "success", text: "Login feito com sucesso" })
            setTimeout(() => {
                setLoading(false)

            }, 2000)
            return response.data
        } catch (error) {
            if (error instanceof AxiosError) {
                handleToastfy({ typeToast: "error", text: error.response?.data.message as string })
            }
            setTimeout(() => {
                setLoading(false)

            }, 2000)
        }
    }
    const handleRegister = async (payload: IClientRegister) => {
        setLoading(true)
        try {
            const response = await api.post('/client', payload)
            handleToastfy({ typeToast: "success", text: "Cadastro realizado com sucesso." })
            setTimeout(() => {
                setLoading(false)
            }, 2000)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                handleToastfy({ typeToast: "error", text: error.response?.data.message })
            }
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }
    return { hadnleLogin, loading, handleRegister }
}