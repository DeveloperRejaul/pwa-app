import React, { createContext } from "react";
import GlobalHook from "../../hooks/GlobalHook";
export const Context = createContext()

export function AppContext({ children }) {
    const value = GlobalHook();
    return <Context.Provider value={value}>{children}</Context.Provider>
}