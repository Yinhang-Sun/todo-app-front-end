import { createContext, useContext, useState } from "react";

// 1: Create a context 
export const AuthContext = createContext() 

export const useAuth = () => useContext(AuthContext)

// 2: Share the created context with other component 
export default function AuthProvider({ children}) {

    // Put some state in the context 
    const [number, setNumber] = useState(10)

    setInterval( () => setNumber(number + 1), 10000 ) 


    return (
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    )
}

