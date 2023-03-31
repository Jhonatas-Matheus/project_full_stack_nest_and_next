"use client"
import { ToastContainer } from "react-toastify"
import { StyledContainer } from "./style"
import { Loading } from "../loading"

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => {
    
    return (
        <StyledContainer>
        <ToastContainer />
        <div className="bg-container"></div>
        <div className="content">{children}</div>
    </StyledContainer>
    //     <>
    //     {(typeof window === 'undefined' || !window.location)? <Loading/> : (
    //     <StyledContainer>
    //     <ToastContainer />
    //     <div className="bg-container"></div>
    //     <div className="content">{children}</div>
    // </StyledContainer>
    //     )}

    //     </>
        
    )
}