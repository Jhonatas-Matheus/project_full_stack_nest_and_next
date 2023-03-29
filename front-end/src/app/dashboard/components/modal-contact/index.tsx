import { ModalGeneric } from "@/components/modal"
import { ModalContext } from "@/context/ModalContext"
import { useRequest } from "@/hooks/useRequests"
import { IContactRequest, IContactResponse } from "@/interfaces/contact.interfaces"
import { ContactCreateFormData, contactCreateSchema, ContactEditFormData, contactEditSchema } from "@/schemas/contact.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { AnimatePresence } from "framer-motion"
import { Dispatch, SetStateAction, useContext } from "react"
import { useForm } from "react-hook-form"
import { StyledFormEditContact, StyledFormExcludeContact } from "./style"



interface IModalContactProps{
  setContacts: Dispatch<SetStateAction<IContactResponse[] | undefined>>
}



export const ModalConact = ({setContacts}: IModalContactProps) =>{
  const {setShowModal, typeModal, setTypeModal, currentIdContact} = useContext(ModalContext)
  const {register: registerEditForm, reset: resetEditForm, handleSubmit: handleSubmitEditForm, formState:{errors: errosEditForm}} = useForm<ContactEditFormData>({resolver: yupResolver(contactEditSchema)})
  const {register: registerCreateForm, reset: resetCreateForm, handleSubmit: handleSubmitCreateForm, formState:{errors: errosCreateForm}} = useForm<ContactCreateFormData>({resolver: yupResolver(contactCreateSchema)})
  const {handleContacts} = useRequest()
  const handleOnSubmitEditContact = async (data: ContactEditFormData) =>{
    await handleContacts("updateOneById", {payload: data as IContactRequest, id:currentIdContact})
    setContacts(await handleContacts("listAll"))
    setTypeModal("")
    resetEditForm()
  }
  const handleOnSubmitCreateContact  = async (data: ContactCreateFormData) =>{
    await handleContacts("createContact", {payload: data})
    setContacts(await handleContacts("listAll"))
    setTypeModal("")
    resetCreateForm()
  }
  const handleExcludeContact = async ()=>{
    await handleContacts("deleteOneById",{id: currentIdContact})
    setContacts(await handleContacts("listAll"))
    setTypeModal("")
  }
  return (
    <ModalGeneric>
      <AnimatePresence
        key="form-edit-contact"
        mode="wait"
        onExitComplete={() => setShowModal(false)}
      >
        {typeModal === "editContact" && (
          <StyledFormEditContact
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmitEditForm(handleOnSubmitEditContact)}
          >
            <h2>Editar Contato</h2>
            <input
              {...registerEditForm("name")}
              type="text"
              placeholder="Nome"
            />
            {errosEditForm.name && <p>{errosEditForm.name?.message}</p>}
            <input
              {...registerEditForm("phone")}
              type="text"
              placeholder="Telefone"
            />
            {errosEditForm.phone && <p>{errosEditForm.phone?.message}</p>}
            <input
              {...registerEditForm("email")}
              type="text"
              placeholder="Email"
            />
            {errosEditForm.email && <p>{errosEditForm.email?.message}</p>}
            <input type="submit" value="Editar" />
          </StyledFormEditContact>
        )}
        {typeModal === "createContact" && (
          <StyledFormEditContact
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmitCreateForm(handleOnSubmitCreateContact)}
          >
            <h2>Adcionar Contato</h2>
            <input {...registerCreateForm("name")} type="text" placeholder="Nome" />
            {errosCreateForm.name && <p>{errosCreateForm.name.message}</p>}
            <input {...registerCreateForm("phone")} type="text" placeholder="Telefone" />
            {errosCreateForm.phone && <p>{errosCreateForm.phone.message}</p>}
            <input {...registerCreateForm("email")} type="text" placeholder="Email" />
            {errosCreateForm.email && <p>{errosCreateForm.email.message}</p>}
            <input type="submit" value="Adcionar" />
          </StyledFormEditContact>
        )}
        {typeModal === "excludeContact" && (
          <StyledFormExcludeContact
            key="form-exclude-contact"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
          >
            <h2>
              Você tem certeza que deseja <span>exluir</span> o contato em
              questão?
            </h2>
            <button onClick={()=>handleExcludeContact()}>Confirmar</button>
          </StyledFormExcludeContact>
        )}
      </AnimatePresence>
    </ModalGeneric>
  );
}