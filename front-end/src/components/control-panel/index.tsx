import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import { StyledControlPanel } from "./style"



export const ControlPanel = () => {
    const {setShowModal,setTypeModal, setEntityModal} = useContext(ModalContext)
    const handleOpenCreateContactModal = ()=>{
        setShowModal(true)
        setEntityModal("contact")
        setTypeModal("createContact")
    }
    return (
      <StyledControlPanel>
        {/* <div className="search-params">
            <input type="text" placeholder="Digite o texto para busca" />
            <input className="btn-submit" type="submit" value="Pesquisar" />
        </div>
        <div className="params-selector">
            <label>
              <input type="radio" name="" id="" />
              <span>Email</span>
            </label>
            <label>
              <input type="radio" name="" id="" />
              <span>Name</span>
            </label>
            <label>
              <input type="radio" name="" id="" />
              <span>Phone</span>
            </label>
        </div> */}
        <input type="button" value="Adcionar contato"  onClick={handleOpenCreateContactModal}/>
      </StyledControlPanel>
    );
}