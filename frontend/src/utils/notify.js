import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const notify = (type,msg,duration = 5000) => {
    switch (type) {
        case 'SUCCESS':
            toast.success(msg, {
                position: "top-right",
                autoClose: duration,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;

        default:
            toast.error(msg, {
                position: "top-right",
                autoClose: duration,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
    }
}
 