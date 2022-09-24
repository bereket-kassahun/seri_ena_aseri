import { createContext } from "react";

export const theme = {
    language: "english",
}

export const ThemeContext = createContext(
    theme
)