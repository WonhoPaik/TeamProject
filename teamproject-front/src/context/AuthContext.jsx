// src/context/AuthContext.js
import React, {createContext, useState, useContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);

    const login = (token) => {
        setAuth({token});
        // 로컬 스토리지에 저장
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);