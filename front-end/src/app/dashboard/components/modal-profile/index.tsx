import { ModalGeneric } from "@/components/modal"
import { ModalContext } from "@/context/ModalContext"
import { useRequest } from "@/hooks/useRequests"
import { IClientEditRequest } from "@/interfaces/client.interfaces"
import { ClientEditFormData, clientEditSchema } from "@/schemas/client.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { AnimatePresence } from "framer-motion"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledExcludeProfile, StyledFormEditProfile } from "./style"




export const ModalProfile = () =>{
    const {typeModal, setShowModal} = useContext(ModalContext)
    const { register: registerEditForm, handleSubmit: handleSubmitEditForm, formState: { errors: errorsEditForm } } = useForm<ClientEditFormData>({ resolver: yupResolver(clientEditSchema) })
    const {handleEditProfile} = useRequest()
    const handleOnSubmitEditForm = async (data: ClientEditFormData) =>{
       const response = await handleEditProfile(data as IClientEditRequest)
        console.log(response)
    }
    return(
        <ModalGeneric>
            <AnimatePresence mode="wait" onExitComplete={()=> setShowModal(false)}>
            {typeModal==="editProfile" && (
                <StyledFormEditProfile key="form-edit-profile" initial={{y: "-100vh"}} animate={{y:0}} exit={{y: "-100vh"}} transition={{duration: .5}} onSubmit={handleSubmitEditForm(handleOnSubmitEditForm)}>
                <h2>Editar Perfil</h2>
                <input {...registerEditForm("username")} type="text" placeholder="Usuário"/>
                {errorsEditForm.username && <p>{errorsEditForm.username.message}</p>}
                <input {...registerEditForm("password")} type="text" placeholder="Senha"/>
                {errorsEditForm.password && <p>{errorsEditForm.password.message}</p>}
                <input {...registerEditForm("email")} type="text" placeholder="Email"/>
                {errorsEditForm.email && <p>{errorsEditForm.email.message}</p>}
                <input {...registerEditForm("phone")} type="text" placeholder="Telefone"/>   
                {errorsEditForm.phone && <p>{errorsEditForm.phone.message}</p>}   
                <input {...registerEditForm("name")} type="text" placeholder="Nome Completo"/>
                {errorsEditForm.name && <p>{errorsEditForm.name.message}</p>}
                <input type="submit" value="Confirmar" />
                </StyledFormEditProfile>
            )}
            {typeModal==="excludeProfile" && (
                <StyledExcludeProfile key="form-exclude-profile" initial={{y: "-100vh"}} animate={{y:0}} exit={{y: "-100vh"}} transition={{duration: .5}}>
                    <h2> Você tem certeza que deseja <span>exluir</span> sua conta? </h2>
                    <button>Confirmar</button>
                </StyledExcludeProfile>
            )
            }
            </AnimatePresence>
        </ModalGeneric>
    )
}        