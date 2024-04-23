"use client";
import { ReactNode } from "react";
import Sidebar from "../SideBar";
import SubPage from "../SubPage";

interface PageProps {
    children?: ReactNode;
}

export default function PageContainer({
    children,
}: PageProps) {
    return (
        <div className="page-container">
            <Sidebar />
            <SubPage>
                {children}
            </SubPage>
        </div>
    );
}
