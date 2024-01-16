import React, { createContext } from "react";
export  const Context =  createContext()
 
export function AppContext ({children}){
    return <Context.Provider value={{}}>{children}</Context.Provider>
}