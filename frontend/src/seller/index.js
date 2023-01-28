import {SideBar} from "./common/SideBarNew";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AddService } from "./pages/service/AddService";
import { SellerDashboard } from "./pages/SellerDashboard";
import { SellerContext, seller} from "./context/seller-context";
import { getSeller } from "../user/api/getSeller";
import { useEffect, useState } from "react";
import { Logout } from "./pages/Logout";
import { ServiceList } from "./pages/ServiceList";
import { Profile } from "./pages/Profile";
import { EditProfile } from "./pages/EditProfile";
import { Verification } from "./pages/Verification";
import { EntryService } from "./pages/service/EntryService";
import { MediumService } from "./pages/service/MediumService";
import { PremiumService } from "./pages/service/PremiumService";
import { EditService } from "./pages/EditService";
import { Payment } from "./pages/Payment";
import { AddAndEditService } from "./pages/service/AddAndEditService";

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
                    <Route exact path='/services/entry_service' element={<EntryService />}></Route>
                    <Route exact path='/services/medium_service' element={<MediumService />}></Route>
                    <Route exact path='/services/premium_service' element={<PremiumService />}></Route>
                    <Route exact path='/services/add_edit_service' element={<AddAndEditService />}></Route>
                    <Route exact path='/notifications' ></Route>
                    <Route exact path='/settings' ></Route>
                    <Route exact path='/logout' element={<Logout/>} ></Route>
                    <Route exact path="/service_list" element={<ServiceList/>}></Route>
                    <Route exact path="/service_list/edit_service" element={<EditService/>}></Route>
                    <Route exact path="/profile" element={<Profile/>}></Route>
                    <Route exact path="/profile/edit_profile" element={<EditProfile/>}></Route>
                    <Route exact path="/payment" element={<Payment/>}></Route>
                </Routes>
            </SideBar>
        </SellerContext.Provider>
    )
}