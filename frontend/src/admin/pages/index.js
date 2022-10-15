import { Dashboard } from "./dashboard/DashBoard"

import { Route, Routes } from "react-router-dom"
import SideBar from "./SideBar"
import { ServiceApproval } from "./ServiceApproval"
export const AdminDashboard = () => {

    return (
        <>
            <SideBar>
                <Routes>
                    <Route exact path='/' element={<Dashboard />}></Route>
                    <Route exact path='service_approval' element={<ServiceApproval />}></Route>
                </Routes>
            </SideBar>
        </>
    )
}