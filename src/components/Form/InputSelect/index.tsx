import InputGroup from "../InputGroup";
import styles from "./styles.module.css";

interface PageProps {
    id: string;
    title: string;
    values: Array<{ value: string, label: string }>;
}


export default function InputSelect({
    id,
    title,
    values
}: PageProps) {
    return (
        <>
            <InputGroup>
                <label htmlFor={id}>{title}</label>
                <select className={styles.select} id={id} name={id} >
                    {
                        values?.map((value, index) => {
                            return <option key={index} value={value.value}>{value.label}</option>
                        })
                    }
                </select>
            </InputGroup>
        </>
    );
}