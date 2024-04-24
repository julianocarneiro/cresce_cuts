"use client";
import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Filters from "./components/Filters";
import Datatable from "./components/Datatable";
import { useAppContext } from "@/context/AppContext";

import "./style.css";

export default function Descontos() {

    const { app } = useAppContext();

    return (
        <>
            <div className="title">
                <h1>Lista de Descontos</h1>
                <span>Loja: {app.loja}</span>
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