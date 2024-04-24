import { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    type?: string;
    width?: string;
}

export default function Button({
    children,
    type,
    width
}: PageProps) {

    const maxClass = width === "max" ? " btn-max-width" : "";

    return (
        <>
            <button className={`btn btn-${type}${maxClass}`}>{children}</button>
        </>
    );
}