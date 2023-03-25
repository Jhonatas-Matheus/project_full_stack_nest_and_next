"use client"
import { StyledForm } from "./styles"

interface IFormsProps {
    title: string,
    children: React.ReactNode
}



export const Form = ({ children, title }: IFormsProps) => {
    return (
        <StyledForm>
            <h2>{title}</h2>
            {children}
        </StyledForm>
    )
}