"use client";
import { createContext, useState } from "react";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
    const [ loggedIn, setLoggedIn ] = useState("");
    return (
        <LoggedInContext.Provider value={[ loggedIn, setLoggedIn]}>
            { children }
        </LoggedInContext.Provider>
    )
}

export default LoggedInContext;
