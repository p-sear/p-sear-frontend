import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState('');

    const login = (name) => {
        setIsLogged(true);
        setUserName(name);
    };

    const logout = () => {
        setIsLogged(false);
        setUserName('');
    };

    return (
        <AuthContext.Provider value={{ isLogged, userName, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);