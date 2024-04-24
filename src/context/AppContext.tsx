"use client";
import React, { createContext, useContext, useState } from 'react';

export type AppContextStateType = {
    loja: string;
}

const INITIAL_STATE = {
    loja: 'Super João - Nova loja online'
}

export type AppContextType = {
    app: AppContextStateType;
    setLoja: (loja:string) => void;
}

type Props = {
    children: React.ReactNode;
}

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }:Props ) => {

    const [ app, setApp ] = useState(INITIAL_STATE);

    function setLoja(loja:string)
    {
        setApp({...app, loja})
    }

    const values:AppContextType = {
        app, 
        setLoja
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );

}

export const useAppContext = () => useContext(AppContext);