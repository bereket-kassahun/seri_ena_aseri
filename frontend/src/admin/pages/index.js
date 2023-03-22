import { Dashboard } from "./dashboard/DashBoard"

import { Route, Routes } from "react-router-dom"
import SideBar from "./SideBar"
// import { ServiceApproval } from "./ServiceApproval"
import { ProfessionalsList } from "./ProfessionalsList"
import { ServicesList } from "./ServicesList"
import { RegisterProfessional } from "./RegisterProfessional"
import { CreateService } from "./CreateService"
import { AddService } from "./AddService"
export const AdminDashboard = () => {

    return (
        <>
            <SideBar>
                <Routes>
                    <Route exact path='/' element={<Dashboard />}></Route>
                    {/* <Route exact path='service_approval' element={<ServiceApproval />}></Route> */}
                    <Route exact path='professionals_list' element={<ProfessionalsList />}></Route>
                    <Route exact path='services_list' element={<ServicesList/>}></Route>
                    <Route exact path='register_professional' element={<RegisterProfessional/>}></Route>
                    <Route exact path='create_service' element={<CreateService/>}></Route>
                    <Route exact path='add_service' element={<AddService/>}></Route>
                </Routes>
            </SideBar>
        </>
    )
}