import { createContext, useState } from "react";

// 1: Create a context 
export const AuthContext = createContext() 

// 2: Share the created context with other component 
export default function AuthProvider({ children}) {

    // Put some state in the context 
    const [number, setNumber] = useState(10)


    return (
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    )
}

