import { AuthContext } from "@/context/AuthContext"
import { IClienteLogin, IClientRegister } from "@/interfaces/client.interfaces"
import { IContactRequest, IContactResponse } from "@/interfaces/contact.interfaces"
import { api } from "@/services/api"
import { handleToastfy } from "@/utils/toastfy.helper"
import axios, { AxiosError } from "axios"
import { useContext, useState } from "react"
import { toast } from "react-toastify"

type TypeRequest = "listAll" | "updateOneById" | "deleteOneById" | "createContact";

export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>()
    const { setProfile, setToken, token } = useContext(AuthContext)
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
    const handleContacts = async (typeRequest: TypeRequest, payload?: IContactRequest, id?: string): Promise<IContactResponse[]> => {
        switch (typeRequest) {
            case "listAll":
                return await (await api.get('/contact', { headers: { Authorization: `Bearer ${token}` } })).data
            case "createContact":
                return await (await api.post('/contact', payload, { headers: { Authorization: `Bearer ${token}` } })).data
            case "updateOneById":
                return await (await api.patch(`/contact/${id}`, payload, { headers: { Authorization: `Bearer ${token}` } })).data
            case "deleteOneById":
                return await (await api.patch(`/contact/${id}`, payload, { headers: { Authorization: `Bearer ${token}` } })).data
            default:
                return await (await api.get('/contact')).data
        }
    }
    return { hadnleLogin, loading, handleRegister, handleContacts }
}