import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
        const response = await axios.post('/member/signin', {
            username,
            password,
        });
        setUser(response.data); // 성공적인 로그인 후 사용자 데이터 저장
        } catch (error) {
        console.error("로그인 실패:", error);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
    };

export const useAuth = () => useContext(AuthContext);