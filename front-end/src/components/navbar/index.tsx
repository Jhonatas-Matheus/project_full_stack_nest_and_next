import Link from "next/link"
import { StyledNavbar } from "./styles"
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"



export const Navbar = () => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const { setToken } = useContext(AuthContext)
    return (
        <StyledNavbar>
            <div className="teste">
                <h1 className="logo-site">Project <span className="logo-detail">Full-Stack</span></h1>
                <button className="btn-nav-bar-control" onClick={() => setShowOptions(!showOptions)}>
                    <img className="icon-nav-bar" src={showOptions ? "./assets/icon-nav-bar-close.svg" : "./assets/icon-nav-bar-open.svg"} alt="Ícone referente a barra de login que simboliza uma tag html" />
                </button>
            </div>
            <div className="options-nav-bar-desktop">
                <img className="profile-info-img" src="./assets/icon-avatar-default.jpg" alt="" />
                <span>Editar Perfil</span>
                <span>Excluir Perfil</span>
                <span>Logout</span>

            </div>
            <AnimatePresence>
                {showOptions &&
                    (
                        <motion.div key="navbar" className="options-nav-bar-mobile" initial={{ y: "-100vh" }} animate={{ y: "0" }} exit={{ y: "-100vh" }} transition={{ duration: .5 }}>
                            <div className="profile-info">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img className="profile-info-img" src="./assets/icon-avatar-default.jpg" alt="" />
                                <h2>JohnDoeUsername</h2>
                                <h3>Jhon Doe</h3>
                            </div>
                            <div className="btn-control-container">
                                <div className="btn-single-container">
                                    <button>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="./assets/icon-pencil.svg" alt="Ícone referente a edição de perfil." />
                                    </button>
                                    <p>Editar Perfil</p>
                                </div>
                                <div className="btn-single-container">
                                    <button>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="./assets/icon-trash.svg" alt="Ícone referente a exclusão de perfil." />
                                    </button>
                                    <p>Excluir Perfil</p>
                                </div>
                                <div className="btn-single-container">
                                    <button onClick={() => {
                                        localStorage.removeItem('project_full_stack:token')
                                        setToken("")
                                    }}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="./assets/icon-logout.svg" alt="Ícone referente a logout." />
                                    </button>
                                    <p>Logout</p>
                                </div>


                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>


        </StyledNavbar>
    )
}