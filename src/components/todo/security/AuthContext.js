import { createContext, useContext, useState } from "react";

// 1: Create a context 
export const AuthContext = createContext() 

export const useAuth = () => useContext(AuthContext)

// 2: Share the created context with other component 
export default function AuthProvider({ children}) {

    // 3: Put some state in the context 

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    function login(username, password) {
        if(username==='Yinhang' && password==='dummy') {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}

