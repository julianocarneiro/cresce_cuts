import InputGroup from "@/components/Form/InputGroup";
import InputSelect from "@/components/Form/InputSelect";
import styles from "./styles.module.css";

export default function Filters() {

    const filter_status_values = [
        {
            value: "ativo",
            label: "Ativo"
        },
        {
            value: "inativo",
            label: "Inativo"
        }
    ];
    const filter_status_tipos_desconto = [
        {
            value: "desconto",
            label: "Desconto"
        },
        {
            value: "cupom",
            label: "Cupom"
        }
    ];

    return (
        <div className={styles.filters}>
            <InputSelect title="Status" id="filter_status" values={filter_status_values}/>
            <InputSelect title="Tipo desconto" id="filter_tipo_desconto" values={filter_status_tipos_desconto}/>
        </div>
    );
}