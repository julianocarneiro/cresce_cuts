import { ReactNode } from "react";


interface CardHeaderProps { 
    children?: ReactNode;
}

export default function CardHeader({ children }: CardHeaderProps) {
    return (
        <div className="card-header">
            {children}
        </div>
    );
}