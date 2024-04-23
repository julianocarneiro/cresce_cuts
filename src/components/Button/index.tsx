import { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    type?: string;
}

export default function Button({
    children,
    type
}: PageProps) {
    return (
        <>
            <button className={`btn btn-${type}`}>{children}</button>
        </>
    );
}