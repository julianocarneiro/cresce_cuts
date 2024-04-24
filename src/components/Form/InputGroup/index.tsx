import { ReactNode } from "react";
import styles from "./styles.module.css";

interface PageProps {
    children?: ReactNode;
    type?: string;
}


export default function InputGroup({
    children,
    type
}: PageProps) {
    return (
        <div className={styles.input_group}>
            {children}            
        </div>
    );
}