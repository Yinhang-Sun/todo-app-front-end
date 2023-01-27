import { createContext, useContext, useState } from "react";

// 1: Create a context 
export const AuthContext = createContext() 

export const useAuth = () => useContext(AuthContext)

// 2: Share the created context with other component 
export default function AuthProvider({ children}) {

    // 3: Put some state in the context 

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if(username==='Yinhang' && password==='dummy') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}

