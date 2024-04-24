import Button from "@/components/Button";
import { Card } from "@/components/Card";

import "./style.css";
import Filters from "./components/Filters";
import Datatable from "./components/Datatable";

export default function Descontos() {
    return (
        <>
            <div className="title">
                <h1>Lista de Descontos</h1>
                <span>Loja: Super João - Nova loja online</span>
            </div>

            <Card.Root>
                <Card.Header>
                    Descontos cadastrados
                    <Button type="primary">Novo Desconto</Button>
                </Card.Header>
                <Card.Body>

                    <Filters />
                    <Datatable />
                   
                </Card.Body>
            </Card.Root>


        </>
    );
}