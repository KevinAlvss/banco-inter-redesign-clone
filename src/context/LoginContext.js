import React, { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({children}){
    const [userName, setUserName] = useState('');
    
    return(
        <LoginContext.Provider value={{
            userName,
            setUserName
        }} >
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
    const context = useContext(LoginContext);
    const { userName, setUserName } = context;
    return { userName, setUserName }
}