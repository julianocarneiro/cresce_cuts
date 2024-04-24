import InputGroup from "../InputGroup";
import styles from "./styles.module.css";

interface PageProps {
    id: string;
    title: string;
}


export default function InputText({
    id,
    title,
}: PageProps) {
    return (
        <>
            <InputGroup>
                <label htmlFor={id}>{title}</label>
                <input className={styles.text} type="text" id={id} name={id} />
            </InputGroup>
        </>
    );
}