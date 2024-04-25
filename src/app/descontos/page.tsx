"use client";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Filters from "./components/Filters";
import Datatable from "./components/Datatable";
import { useAppContext } from "@/context/AppContext";
import ProductsApi from "@/services/api/ProductsApi";

import "./style.css";
import { useRouter } from "next/navigation";

export default function Descontos() {

    const router = useRouter();
    const { app } = useAppContext();
    const [data, setData] = useState<any>([]);
    const [selected, setSelected] = useState<number>(0);

    const getData = async () => {
        const data:any  = await ProductsApi.getAll();
        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleNew = () => {
        router.push("/descontos/cadastrar");
    }

    return (
        <>
            <div className="title">
                <h1>Lista de Descontos</h1>
                <span>Loja: {app.loja}</span>
            </div>

            <Card.Root>
                <Card.Header>
                    Descontos cadastrados {selected}
                    <Button type="primary" onClick={handleNew}>Novo Desconto</Button>
                </Card.Header>
                <Card.Body>

                    <Filters />
                    <Datatable data={data} selected={setSelected}/>
                   
                </Card.Body>
            </Card.Root>
        </>
    );
}