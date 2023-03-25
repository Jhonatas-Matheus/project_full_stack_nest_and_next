import * as yup from "yup"


export const clientRegisterSchema = yup.object({
    email: yup.string().required("O campo é obrigatório").email("O campo deve ser um email válido"),
    name: yup.string().required("O campo é obrigatório"),
    phone: yup.string().required("O campo é obrigatório"),
    username: yup.string().required("O campo é obrigatório"),
    password: yup.string().required("O campo é obrigatório").min(8, "A senha deve conter pelo menos 8 caractéres."),
})
export type ClientRegisterFormData = yup.InferType<typeof clientRegisterSchema>

export const clientLoginSchema = yup.object({
    username: yup.string().required("O campo email é obrigatório"),
    password: yup.string().required("O campo password é obrigatório")
})
export type ClientLoginFormData = yup.InferType<typeof clientLoginSchema>
