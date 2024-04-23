import { ReactNode } from "react";

interface CardRootProps { 
    children?: ReactNode;
}

export default function CardRoot({ children }: CardRootProps) {
    return (
        <div className="card">
            {children}
        </div>
    );
}