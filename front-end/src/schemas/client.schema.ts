import * as yup from "yup"


export const clientRegisterSchema = yup.object({
    email: yup.string().required("O campo é obrigatório").email("O campo deve ser um email válido"),
    name: yup.string().required("O campo é obrigatório"),
    phone: yup.string().required("O campo é obrigatório").matches(/\([0-9]{2}\)\s9\s[0-9]{4}\-[0-9]{4}/gm, "O padrão de telefone não é aceito"),
    username: yup.string().required("O campo é obrigatório"),
    password: yup.string().required("O campo é obrigatório").min(8, "A senha deve conter pelo menos 8 caractéres."),
})
export type ClientRegisterFormData = yup.InferType<typeof clientRegisterSchema>

export const clientLoginSchema = yup.object({
    username: yup.string().required("O campo email é obrigatório"),
    password: yup.string().required("O campo password é obrigatório")
})
export type ClientLoginFormData = yup.InferType<typeof clientLoginSchema>

export const clientEditSchema = yup.object({
    email: yup.string().email("O campo deve ser um email válido").notRequired().transform((value:string)=> !value? undefined: value),
    name: yup.string().transform((value:string)=> !value? undefined: value),
    phone: yup.string().matches(/\([0-9]{2}\)\s9\s[0-9]{4}\-[0-9]{4}/gm, "O padrão de telefone não é aceito").transform((value:string)=> !value? undefined: value),
    username: yup.string().transform((value:string)=> !value? undefined: value),
    password: yup.string().min(8).nullable().transform((value: any) => !!value ? value : undefined)
}).transform((value)=> !value? undefined: value)
export type ClientEditFormData = yup.InferType<typeof clientEditSchema>

