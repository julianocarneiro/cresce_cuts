import { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    type?: string;
    width?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    type,
    width,
    onClick
}: PageProps) {

    const maxClass = width === "max" ? " btn-max-width" : "";

    return (
        <>
            <button className={`btn btn-${type}${maxClass}`} onClick={onClick}>{children}</button>
        </>
    );
}