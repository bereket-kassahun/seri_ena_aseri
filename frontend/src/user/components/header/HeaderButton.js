
import { useState } from "react"

export const HeaderButton = ({ title }) => {

    const [isSignInHover, setSignInIsHover] = useState(false);

    const handleMouseEnterSignIn = () => {
        setSignInIsHover(true);
    };

    const handleMouseLeaveSignIn = () => {
        setSignInIsHover(false);
    };

    const loginBtnStyle = {
        fontSize: "1rem",
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
        padding: "1rem 2rem",
        borderRadius: '0.4rem',
        cursor: "pointer",
        overflow: "hidden",
        border: "0.1rem solid #0041ca",
        backgroundColor: isSignInHover ? '#538EB6' : 'inherit',
        color: isSignInHover ? '#ffffff' : '#538EB6',
        boxShadow: "none",
        transition: "background-color 0.2s ease-out, color 0.2s ease-out",
    }

    return (
        <div class="" >
            <a class=""
                style={loginBtnStyle}
                onMouseEnter={handleMouseEnterSignIn}
                onMouseLeave={handleMouseLeaveSignIn}
            >{title}</a>
        </div >
    )
} 