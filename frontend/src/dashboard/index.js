import SideBar from "./common/SideBar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AddService } from "./pages/service/AddService";
import { SellerDashboard } from "./pages/SellerDashboard";
import { SellerContext, seller} from "./context/seller-context";
import { getSeller } from "../api/getSeller";
import { useEffect, useState } from "react";
import { Logout } from "./pages/Logout";

export default function Dashboard() {

    const [currentSeller, setCurrentSeller] = useState(seller)

    useEffect(() => {
        getSeller((data) => {
            setCurrentSeller(data)
            console.log("this is data", data)
        })
    }, [])

    return (
        <SellerContext.Provider value={currentSeller}>
            <SideBar>
                <Routes>
                    <Route exact path='/' element={<SellerDashboard />}></Route>
                    <Route exact path='/services' element={<AddService />}></Route>
                    <Route exact path='/notifications' ></Route>
                    <Route exact path='/profile' ></Route>
                    <Route exact path='/profile' ></Route>
                    <Route exact path='/settings' ></Route>
                    <Route exact path='/logout' element={<Logout/>} ></Route>
                </Routes>
            </SideBar>
        </SellerContext.Provider>
    )
}