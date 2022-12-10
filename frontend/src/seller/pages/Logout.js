

import { sellerLogout } from "../api/sellerLogout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Logout = () => {

    const navigate = useNavigate();

    
    const logout  = () => {
        sellerLogout((data) => {
            if(data){
                if(data.success){
                    navigate("/")
                }else{

                }
            }
        })
    }

    useEffect(() => {
        logout()
    }, [])
    return (
        <>
            
        </>
    )
}