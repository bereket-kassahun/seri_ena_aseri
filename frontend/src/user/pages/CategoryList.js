
import { Link } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import ProfessionalCategories from "./ProfessionalCategories"
import TradersCategories from "./TradersCategories"

export default function CategoryList() {
    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>
            <ProfessionalCategories/>
            <TradersCategories/>
        </>
    )
}