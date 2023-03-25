"use client"
import { StyledContainer } from "./style"

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => {
    return (
        <StyledContainer>
            <div className="bg-container"></div>
            <div className="content">{children}</div>
        </StyledContainer>
    )
}