"use client"
import { Form } from "@/components/form";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, MotionAdvancedProps } from "framer-motion";
import { useRequest } from "@/hooks/useRequests";
import { useForm } from "react-hook-form";
import { ClientLoginFormData, clientLoginSchema, ClientRegisterFormData, clientRegisterSchema } from "@/schemas/client.schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { IClienteLogin } from "@/interfaces/client.interfaces";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";





export default function LoginPage() {
    const [currentForm, setCurrentForm] = useState<"login" | "register">("login")
    const { hadnleLogin, loading, handleRegister } = useRequest()
    const { register: registerLoginForm, handleSubmit: handleSubmitLoginForm, formState: { errors: errorsLoginForm } } = useForm<ClientLoginFormData>({ resolver: yupResolver(clientLoginSchema) })
    const { register: registerRegisterForm, handleSubmit: handleSubmitRegisterForm, formState: { errors: errorsRegisterForm } } = useForm<ClientRegisterFormData>({ resolver: yupResolver(clientRegisterSchema) })
    const handleOnSubmit = async (data: ClientLoginFormData) => {
        const response = await hadnleLogin(data as IClienteLogin)
    }
    const handleOnSubmitRegister = async (data: ClientRegisterFormData) => {
        const response = await handleRegister(data)
    }
    return (
        <AnimatePresence mode="wait">
            <ToastContainer />
            {currentForm === "login" ? (
                <Form key="formLogin" motionConfig={{ initial: { y: -1000, width: "80%", height: "min-content" }, animate: { y: 0, borderRadius: loading ? "50%" : "10px", height: loading ? "100px" : "min-content", width: loading ? "100px" : "80%" }, exit: { y: -1000 } }} onSubmit={handleSubmitLoginForm(handleOnSubmit)}>
                    {!loading ? (
                        <>
                            <h2>Faça seu Login</h2>
                            <input {...registerLoginForm("username")} type="text" placeholder="Email" />
                            {errorsLoginForm && <p className="errors-validation">{errorsLoginForm.username?.message}</p>}
                            <input {...registerLoginForm("password")} type="password" placeholder="Senha" />
                            {errorsLoginForm && <p className="errors-validation">{errorsLoginForm.password?.message}</p>}
                            <input type="submit" value="Logar" />
                            <input type="submit" value="Cadastrar-se" onClick={(e) => {
                                e.preventDefault()
                                setCurrentForm("register")
                            }} />
                            {/* <span>Esqueci minha senha</span> */}
                        </>
                    ) : (
                        <>
                            <img src="./assets/spinner.svg" alt="" />
                        </>
                    )}

                </Form>
            ) : (
                <Form key="formRegister" motionConfig={{ initial: { x: 1000, width: "80%", height: "min-content" }, animate: { x: 0, borderRadius: loading ? "50%" : "10px", height: loading ? "100px" : "min-content", width: loading ? "100px" : "80%" }, exit: { x: 1000 } }} onSubmit={handleSubmitRegisterForm(handleOnSubmitRegister)}>
                    {!loading ? (
                        <>

                            <h2>Faça seu Cadastro</h2>
                            <input {...registerRegisterForm("email")} type="text" placeholder="Email" />
                            {errorsRegisterForm && <p className="errors-validation">{errorsRegisterForm.email?.message}</p>}

                            <input {...registerRegisterForm("password")} type="text" placeholder="Senha" />
                            {errorsRegisterForm && <p className="errors-validation">{errorsRegisterForm.password?.message}</p>}

                            <input {...registerRegisterForm("username")} type="text" placeholder="Usuário" />
                            {errorsRegisterForm && <p className="errors-validation">{errorsRegisterForm.username?.message}</p>}

                            <input {...registerRegisterForm("name")} type="text" placeholder="Nome Completo" />
                            {errorsRegisterForm && <p className="errors-validation">{errorsRegisterForm.name?.message}</p>}

                            <input {...registerRegisterForm("phone")} type="text" placeholder="Telefone" />
                            {errorsRegisterForm && <p className="errors-validation">{errorsRegisterForm.phone?.message}</p>}

                            <input type="submit" value="Cadastrar-se" />
                            <span className="msg-login">Já possui um cadastro?! Faça o <span onClick={() => setCurrentForm("login")}>Login</span></span>
                        </>
                    ) : (
                        <>
                            <img src="./assets/spinner.svg" alt="" />
                        </>
                    )
                    }
                </Form>
            )}
        </AnimatePresence>
    )
}