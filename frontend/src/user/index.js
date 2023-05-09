
import { Route, Routes } from "react-router-dom"
import { Home } from './pages/Home'
import About from "./pages/About"
import Search from "./pages/Search"
import { Login } from "./pages/Login"
import Register from "./pages/Register"
import Category from "./pages/PaginatedCategoryServices"
import CategoryList from "./pages/CategoryList"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Container from "./pages/Container"
import {Login  as AdminLogin} from '../admin/pages/Login'
import ProfessionalCategories from "./pages/ProfessionalCategories"
import TradersCategories from "./pages/TradersCategories"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"
import { HowTo } from "./pages/HowTo"
import { LeaveReview } from "./pages/LeaveReview"
import { NotFoundPage } from "../utils/404"
import PaginatedCategoryServices from "./pages/PaginatedCategoryServices"
// import { Test } from "../Test2"
export const User = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='about' element={<About />}></Route>
                    <Route exact path='search' element={<Search />}></Route>
                    <Route exact path='paginated_category_services' element={<PaginatedCategoryServices />}></Route>
                    <Route exact path='category_list' element={<CategoryList />}></Route>
                    <Route exact path='professional_category_list' element={<ProfessionalCategories />}></Route>
                    <Route exact path='traders_category_list' element={<TradersCategories />}></Route>
                    <Route exact path='contact_us' element={<Contact />}></Route>
                    <Route exact path='service' element={<Service />}></Route>
                    <Route exact path='login' element={<Login />}></Route>
                    <Route exact path='register' element={<Register />}></Route>
                    <Route exact path='admin' element={<AdminLogin />}></Route>
                    <Route exact path='privacy' element={<PrivacyPolicy />}></Route>
                    <Route exact path='howto' element={<HowTo />}></Route>
                    <Route exact path='review' element={<LeaveReview />}></Route>
                    <Route exact path='*' element={<NotFoundPage />}></Route>
                </Routes>
            </Container>
        </>
    )
}