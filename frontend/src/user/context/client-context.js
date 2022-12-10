import { createContext } from "react";

export const client = {
    _id: "",
    username: "",
    email: "",
    ratings: [], 
}

export const ClientContext = createContext(
    client
)