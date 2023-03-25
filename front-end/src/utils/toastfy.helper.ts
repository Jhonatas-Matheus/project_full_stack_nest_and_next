import { toast } from "react-toastify"

interface IHandleToastfyParams {
    typeToast: "success" | "error"
    text: string
}

export const handleToastfy = ({ typeToast, text }: IHandleToastfyParams) => {
    switch (typeToast) {
        case 'success':
            return toast.success(text, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        case 'error':
            return toast.error(text, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        default:
            return toast.warning("Toast Defaul, porfavor configure o seu toast passando os parametros necessários", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
    }


}