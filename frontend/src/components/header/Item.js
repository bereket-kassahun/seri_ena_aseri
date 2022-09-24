import { Link } from "react-router-dom"
import { useState } from "react";
export const Item = ({ name }) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const itemStyle = {
        color: isHover ? "#0051fd" : "black",
        fontWeight: "bold"

    }

    return (

        <a 
            style={itemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>{name}</a>
    )
}