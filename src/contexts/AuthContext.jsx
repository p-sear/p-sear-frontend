import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/member/signin', { email, password });
            setCurrentUser(response.data); // 응답으로 받은 사용자 정보를 상태에 저장
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};