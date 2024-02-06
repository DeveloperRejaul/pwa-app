import React, { createContext } from "react";
import useGlobal from "../../hooks/useGlobal";

export const Context = createContext()

export function AppContext({ children }) {
    const value = useGlobal();
    return <Context.Provider value={{ ...value }}>{children}</Context.Provider>
}