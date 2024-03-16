// import { Dashboard } from "./dashboard/DashBoard"

import { Route, Routes } from "react-router-dom"
import SideBar from "./SideBar"
// import { ServiceApproval } from "./ServiceApproval"
// import { ProfessionalsList } from "./ProfessionalsList"
// import { ServicesList } from "./ServicesList"
// import { RegisterProfessional } from "./RegisterProfessional"
// import { CreateService } from "./CreateService"
// import { AddService } from "./AddService"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { is_logged_in } from "../api"
import { SUB_ADMIN_HIDDEN_URL } from "../../config"
// import { CreateSubAdmin } from "./CreateSubAdmin"
export const SubAdminDashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
        is_logged_in({}, (res) => {
            if (res.success) {
                navigate('dashboard')
            } else {
                navigate('/'+SUB_ADMIN_HIDDEN_URL+'/login')
            }
        })
    }, [])

    return (
        <>
            <SideBar>
                <Routes>
                    {/* <Route exact path='/dashboard' element={<Dashboard />}></Route> */}
                    {/* <Route exact path='service_approval' element={<ServiceApproval />}></Route> */}
                    {/* <Route exact path='professionals_list' element={<ProfessionalsList />}></Route>
                    <Route exact path='services_list' element={<ServicesList />}></Route>
                    <Route exact path='register_professional' element={<RegisterProfessional />}></Route>
                    <Route exact path='create_service' element={<CreateService />}></Route>
                    <Route exact path='add_service' element={<AddService />}></Route>
                    <Route exact path='create_sub_admin' element={<CreateSubAdmin />}></Route> */}
                </Routes>
            </SideBar>
        </>
    )
}