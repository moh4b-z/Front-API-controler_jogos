// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react"
const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        // Pega do localStorage (se já estava logado)
        const storedUser = localStorage.getItem("user")
        return storedUser ? JSON.parse(storedUser) : null
    });

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook para usar o contexto em qualquer componente
export const useAuth = () => useContext(AuthContext)
