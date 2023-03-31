import * as yup from 'yup'


export const contactEditSchema = yup.object({
    email: yup.string().email().notRequired().transform((value)=> !value? undefined: value),
    phone: yup.string().notRequired().transform((value)=> !value? undefined: value),
    name: yup.string().notRequired().transform((value)=> !value? undefined: value)
})
export type ContactEditFormData = yup.InferType<typeof contactEditSchema>
export const contactCreateSchema = yup.object({
    email: yup.string().email().required("O campo é obrigatório."),
    phone: yup.string().required("O campo é obrigatório.").matches(/\([0-9]{2}\)\s9\s[0-9]{4}\-[0-9]{4}/gm, "O padrão de telefone não é aceito"),
    name: yup.string().required("O campo é obrigatório.")
})
export type ContactCreateFormData = yup.InferType<typeof contactCreateSchema>