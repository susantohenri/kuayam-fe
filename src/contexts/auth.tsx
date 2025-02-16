import { access } from "fs";
import React, { ReactNode, useEffect, useState } from "react";

interface UserData {
    access_token: string,
    refresh_token: string,
}

interface AuthContextType {
    userData: UserData,
    setUserData: (userData: UserData) => void,
}

const AuthContext = React.createContext<AuthContextType>({ userData: { access_token: ``, refresh_token: `` }, setUserData: () => { } });

const cookieName = `kuayam-fe`
function setCookie(userData: UserData) {
    const value = JSON.stringify(userData);
    const date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

function getCookie() {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        const cookieString = c.substring(name.length, c.length);
        return JSON.parse(cookieString);
      }
    }
    return "";
  }

function AuthContextProvider({ children }: { children: ReactNode }) {
    let [access_token, refresh_token] = [``, ``];
    const storedCookie = getCookie();
    if (`` !== storedCookie) {
        access_token = storedCookie.access_token;
        refresh_token = storedCookie.refresh_token;
    }
    const [userData, setUserData] = useState({ access_token, refresh_token });

    useEffect(() => {
        setCookie(userData)
    }, [userData]);

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContext() {
    return React.useContext(AuthContext);
}

export { AuthContextProvider, useAuthContext }