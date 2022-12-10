
import { useState } from "react"

export const LogoutButton = ({ title , logout}) => {

    const [isSignInHover, setSignInIsHover] = useState(false);

    const handleMouseEnterSignIn = () => {
        setSignInIsHover(true);
    };

    const handleMouseLeaveSignIn = () => {
        setSignInIsHover(false);
    };

    const loginBtnStyle = {
        letterSpacing: "0.01rem",
        lineHeight: "1.4",
        fontFamily: "Mulish, sans-serif",
        boxSizing: "inherit",
        textDecoration: "none",
        // fontWeight: "600",
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        padding: "0.5rem 2rem",
        borderRadius: '0.4rem',
        cursor: "pointer",
        overflow: "hidden",
        border: "0.1rem solid #e21032",
        backgroundColor: isSignInHover ? '#e21032' : 'inherit',
        color: isSignInHover ? '#ffffff' : '#538EB6',
        boxShadow: "none",
        transition: "background-color 0.2s ease-out, color 0.2s ease-out",
    }

    return (
        <div class=""  onClick={(evnt) => {logout()}}>
            <a class=""
                style={loginBtnStyle}
                onMouseEnter={handleMouseEnterSignIn}
                onMouseLeave={handleMouseLeaveSignIn}
            >{title}</a>
        </div >
    )
} 