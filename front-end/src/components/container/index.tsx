"use client"
import { StyledContainer } from "./style"

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}