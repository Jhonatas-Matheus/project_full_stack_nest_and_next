import { StyledNavbar } from "./styles"
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { ModalContext } from "@/context/ModalContext"



export const Navbar = () => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const { setToken } = useContext(AuthContext)
    const {profile} = useContext(AuthContext)
    const handleLogout = () =>{
        localStorage.removeItem('project_full_stack:token')
        setToken("")
    }
    const {setShowModal, setTypeModal, setEntityModal} = useContext(ModalContext)
    return (
      <StyledNavbar>
        <div className="teste">
          <h1 className="logo-site">
            Project <span className="logo-detail">Full-Stack</span>
          </h1>
          <button
            className="btn-nav-bar-control"
            onClick={() => setShowOptions(!showOptions)}
          >
            <img
              className="icon-nav-bar"
              src={
                showOptions
                  ? "./assets/icon-nav-bar-close.svg"
                  : "./assets/icon-nav-bar-open.svg"
              }
              alt="Ícone referente a barra de login que simboliza uma tag html"
            />
          </button>
        </div>
        <div className="options-nav-bar-desktop">
          <div className="profile-info">
            <img
              className="profile-info-img"
              src="./assets/icon-avatar-default.jpg"
              alt=""
            />
            <div className="profile-info-data">
              <h2>{profile?.username}</h2>
              {/* <h3>Jhon Doe</h3> */}
            </div>
            <span> | </span>
          </div>
          {/* <img className="profile-info-img" src="./assets/icon-avatar-default.jpg" alt="" /> */}
          <span
            onClick={() => {
              setTypeModal("editProfile");
              setEntityModal("client");
              setShowModal(true);
              setShowOptions(false);
            }}
          >
            Editar Perfil
          </span>
          <span
            onClick={() => {
              setTypeModal("excludeProfile");
              setShowModal(true);
              setShowOptions(false);
              setEntityModal("client");
            }}
          >
            Excluir Perfil
          </span>
          <span onClick={handleLogout}>Logout</span>
        </div>
        <AnimatePresence>
          {showOptions && (
            <motion.div
              key="navbar"
              className="options-nav-bar-mobile"
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5 }}
            >
              <div className="profile-info">
                <img
                  className="profile-info-img"
                  src="./assets/icon-avatar-default.jpg"
                  alt=""
                />
                <h2>{profile?.username}</h2>
                <h3>{profile?.name}</h3>
              </div>
              <div className="btn-control-container">
                <div className="btn-single-container">
                  <button
                    onClick={() => {
                      setTypeModal("editProfile");
                      setShowModal(true);
                      setShowOptions(false);
                      setEntityModal("client");
                    }}
                  >
                    <img
                      src="./assets/icon-pencil.svg"
                      alt="Ícone referente a edição de perfil."
                    />
                  </button>
                  <p>Editar Perfil</p>
                </div>
                <div className="btn-single-container">
                  <button
                    onClick={() => {
                      setTypeModal("excludeProfile");
                      setShowModal(true);
                      setShowOptions(false);
                      setEntityModal("client");
                    }}
                  >
                    <img
                      src="./assets/icon-trash.svg"
                      alt="Ícone referente a exclusão de perfil."
                    />
                  </button>
                  <p>Excluir Perfil</p>
                </div>
                <div className="btn-single-container">
                  <button onClick={handleLogout}>
                    <img
                      src="./assets/icon-logout.svg"
                      alt="Ícone referente a logout."
                    />
                  </button>
                  <p>Logout</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </StyledNavbar>
    );
}