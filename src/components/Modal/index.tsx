"use client";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface PageProps {
    children?: ReactNode;
    isOpen: boolean;
    title?: string;
    onClose: () => void;
}

export default function Modal({
    children,
    isOpen,
    title,
    onClose,
}: PageProps) {
    return (
        <>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            {title || "Sem titulo"}
                        </h2>
                        <button className={styles.closeButton} onClick={onClose}>&#10006;</button>
                    </div>
                    <div className={styles.body}>{children}</div>

                </div>
            </div>
        </>
    );
}
