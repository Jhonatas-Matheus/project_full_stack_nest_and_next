// "use client"
import { AnimationProps } from "framer-motion"
import { StyledForm } from "./styles"
interface IFormsProps {
    children: React.ReactNode
    motionConfig: AnimationProps
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => any
}

export const Form = ({ children, motionConfig, onSubmit }: IFormsProps) => {

    return (
        <StyledForm {...motionConfig} onSubmit={onSubmit}>
            {children}
        </StyledForm>
    )
}