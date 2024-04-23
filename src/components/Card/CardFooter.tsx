import { ReactNode } from "react";


interface CardFooterProps { 
    children?: ReactNode;
}

export default function CardFooter({ children }: CardFooterProps) {
    return (
        <div className="card-header">
            {children}
        </div>
    );
}