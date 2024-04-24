import { ReactNode } from "react";
import styles from "./styles.module.css";

interface PageProps {
    children?: ReactNode;
    type?: string;
    show?: boolean;
}


export default function LineGroup({
    children,
    type,
    show = true
}: PageProps) {
    return (
        <>
            {
                show && <div className={styles.line_group}>
                    {children}
                </div>
            }
        </>
    );
}
