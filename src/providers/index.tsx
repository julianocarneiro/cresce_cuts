"use client";
import { ReactNode } from "react";
import { AppContextProvider } from "@/context/AppContext";

interface PageProps {
    children?: ReactNode;
}

export default function Providers({
    children,
}: PageProps) {


    return (
        <AppContextProvider>
            {children}
        </AppContextProvider>
    );
}