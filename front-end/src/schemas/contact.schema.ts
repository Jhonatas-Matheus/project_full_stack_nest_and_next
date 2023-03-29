import * as yup from 'yup'


export const contactEditSchema = yup.object({
    email: yup.string().email().notRequired().transform((value)=> !value? undefined: value),
    phone: yup.string().notRequired().transform((value)=> !value? undefined: value),
    name: yup.string().notRequired().transform((value)=> !value? undefined: value)
})
export type ContactEditFormData = yup.InferType<typeof contactEditSchema>
export const contactCreateSchema = yup.object({
    email: yup.string().email().required("O campo é obrigatório."),
    phone: yup.string().required("O campo é obrigatório."),
    name: yup.string().required("O campo é obrigatório.")
})
export type ContactCreateFormData = yup.InferType<typeof contactCreateSchema>