"use client";
import { React, useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ newuser, setNewuser ] = useState(false);
    return (
        <UserContext.Provider value={[ newuser, setNewuser]}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;
