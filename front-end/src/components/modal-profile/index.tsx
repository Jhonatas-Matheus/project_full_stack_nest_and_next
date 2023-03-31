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
import InputMask from 'react-input-mask';
import { AuthContext } from "@/context/AuthContext"




export const ModalProfile = () =>{
    const {profile,trigger,setTrigger, setToken} = useContext(AuthContext)
    const {typeModal, setShowModal, setTypeModal} = useContext(ModalContext)
    const { register: registerEditForm, reset:resetEditForm, handleSubmit: handleSubmitEditForm, formState: { errors: errorsEditForm } } = useForm<ClientEditFormData>({ resolver: yupResolver(clientEditSchema) })
    const {handleEditProfile, handleExcludeProfile: handleExcludeProfileRequest} = useRequest()
    const handleOnSubmitEditForm = async (data: ClientEditFormData) =>{
       const response = await handleEditProfile(data as IClientEditRequest)
        resetEditForm()
        setTypeModal("")
    }
    const handleExcludeProfile = async () =>{
      setTypeModal("")
      setShowModal(false)
      await handleExcludeProfileRequest()
    }
    return (
      <ModalGeneric>
        <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
          {typeModal === "editProfile" && (
            <StyledFormEditProfile
              key="form-edit-profile"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmitEditForm(handleOnSubmitEditForm)}
            >
              <h2>Editar Perfil</h2>
              <input
                {...registerEditForm("username")}
                type="text"
                placeholder="Usuário"
              />
              {errorsEditForm.username && (
                <p>{errorsEditForm.username.message}</p>
              )}
              <input
                {...registerEditForm("password")}
                type="text"
                placeholder="Senha"
              />
              {errorsEditForm.password && (
                <p>{errorsEditForm.password.message}</p>
              )}
              <input
                {...registerEditForm("email")}
                type="text"
                placeholder="Email"
              />
              {errorsEditForm.email && <p>{errorsEditForm.email.message}</p>}
              {/* <input {...registerEditForm("phone")} type="text" placeholder="Telefone"/>    */}
              <InputMask
                {...registerEditForm("phone")}
                type="text"
                placeholder="Telefone"
                mask="(99) 9 9999-9999"
              />
              {errorsEditForm.phone && <p>{errorsEditForm.phone.message}</p>}
              <input
                {...registerEditForm("name")}
                type="text"
                placeholder="Nome Completo"
              />
              {errorsEditForm.name && <p>{errorsEditForm.name.message}</p>}
              <input type="submit" value="Confirmar" />
            </StyledFormEditProfile>
          )}
          {typeModal === "excludeProfile" && (
            <StyledExcludeProfile
              key="form-exclude-profile"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5 }}
            >
              <h2>
                Você tem certeza que deseja <span>exluir</span> sua conta?{" "}
              </h2>
              <button onClick={handleExcludeProfile}>Confirmar</button>
            </StyledExcludeProfile>
          )}
        </AnimatePresence>
      </ModalGeneric>
    );
}        