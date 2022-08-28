import { createContext } from "react";

export const seller = {
    _id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    services: [],
}

export const SellerContext = createContext(
    seller
)