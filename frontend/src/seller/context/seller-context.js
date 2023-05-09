import { createContext } from "react";

export const _seller = {
    _id: "",
    username: "",
    firstName: "",
    lastName: "",
    img: "",
    email: "",
    services: [],
    phoneNumber: "",
    companyName: "",
    address1: "", 
    address2: "",
    city: "", 
    country: "",
    telephone: "", 
    howDidYouHear: "",
    whereDidYouHear: "",
    workingLocation: "", 
    areasCovered: ""
}

export const SellerContext = createContext(
    _seller
)