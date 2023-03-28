import { AuthContext } from "@/context/AuthContext"
import { IClientEditRequest, IClientEditResponse, IClienteLogin, IClientRegister } from "@/interfaces/client.interfaces"
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
            handleToastfy({ typeToast: "success", text: "Login feito com sucesso" })
            setTimeout(() => {
                setLoading(false)
                setToken(response.data.access_token)
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
                return await (await api.get('/contact')).data
            case "createContact":
                return await (await api.post('/contact', payload)).data
            case "updateOneById":
                return await (await api.patch(`/contact/${id}`, payload)).data
            case "deleteOneById":
                return await (await api.patch(`/contact/${id}`, payload)).data
            default:
                return await (await api.get('/contact')).data
        }
    }
    const handleEditProfile = async (payload: IClientEditRequest): Promise<IClientEditResponse | null> =>{
        try {
            const response = await api.patch('/client', payload)
            handleToastfy({typeToast: 'success', text: 'Perfil editado com sucesso.'})
            return response.data
        } catch (error) {
            handleToastfy({typeToast: 'error', text: 'Ocorreu um erro ao editar seu perfil, tente novamente mais tarde'})
            return null
        }

    }
    return { hadnleLogin, loading, handleRegister, handleContacts, handleEditProfile }
}