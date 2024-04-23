"use client";
import { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
}

export default function SubPage({
    children,
}: PageProps) {
    return (
        <div className="subpage">
            {children}
        </div>
    );
}
