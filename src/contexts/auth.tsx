import React, { ReactNode, useState } from "react";

interface authContextType {
    token: string;
    setToken: (token: string) => void;
}

const AuthContext = React.createContext<authContextType>({token: ``, setToken: () => {}});

function AuthContextProvider ({children}: {children: ReactNode}) {
    const [token, setToken] = useState(``);
    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContext () {
    return React.useContext(AuthContext);
}

export {AuthContextProvider, useAuthContext}