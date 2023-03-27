import Link from "next/link"
import { StyledNavbar } from "./styles"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"



export const Navbar = () => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    return (
        <StyledNavbar>
            <div className="teste">
                <h1 className="logo-site">Project Full-Stack</h1>
                {/* <img className="icon-nav-bar" src="./assets/icon-nav-bar-close.svg" alt="icon code" /> */}
                <button onClick={() => setShowOptions(!showOptions)}>
                    <img className="icon-nav-bar" src="./assets/icon-nav-bar-open.svg" alt="icon code" />
                </button>
            </div>
            <AnimatePresence>
                {showOptions &&
                    (
                        <motion.div key="navbar" className="options-nav-bar" initial={{ y: "-100vh" }} animate={{ y: "0" }} exit={{ y: "-100vh" }} transition={{ duration: .5 }}>
                            <div className="profile-info">
                                <img src="./assets/user-random-img.svg" alt="" />
                                <h2>JohnDoeUsername</h2>
                                <h3>Jhon Doe</h3>
                            </div>
                            <div className="btn-control-container">
                                <div className="btn-single-container">
                                    <button>
                                        <img src="./assets/icon-pencil.svg" alt="" />
                                    </button>
                                    <p>Editar Perfil</p>
                                </div>
                                <div className="btn-single-container">
                                    <button>
                                        <img src="./assets/icon-trash.svg" alt="" />
                                    </button>
                                    <p>Excluir Perfil</p>
                                </div>
                                <div className="btn-single-container">
                                    <button>
                                        <img src="./assets/icon-logout.svg" alt="" />
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