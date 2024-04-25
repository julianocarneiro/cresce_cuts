"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Switch from "@/components/Switch";
import ProductGroup from "../ProductGroup";
import ShowIcon from "../ShowIcon";
import Link from "next/link";

interface PageProps {
    data: [];
    selected?: (id: number) => void;
}

export default function Datatable({
    data,
    selected
}: PageProps) {

    
    const router = useRouter();
    const [selectedRow, setSelectedRow] = useState<number>(0);

    const handleShow = (id: number) => {
        router.push(`/descontos/show/${id}`);
    }

    const handleSelect = (e: any) => {
        const id: number = e.target.closest('tr').getAttribute('data-id');
        if(!id) return;
        if (selectedRow === id) {
            setSelectedRow(0);
            if (selected) selected(0);
            return;
        }
        setSelectedRow(id);
        if (selected) selected(id);
    };

    return (
        <>
        {selectedRow}
            <table className="table" onClick={handleSelect}>
                <thead>
                    <tr>
                        <th>Desconto</th>
                        <th>Tipo</th>
                        <th>Data ativação</th>
                        <th>Data inativação</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item: any, index: number) => (
                            <tr key={index} data-id={item.id} className={selectedRow == item.id ? 'selected' : '' }>
                                <td><ProductGroup item={item} /></td>
                                <td>{item.type}</td>
                                <td>{item.start_date}</td>
                                <td>{item.end_date}</td>
                                <td width='5%'>
                                    <div className="table_actions">
                                        <Switch />
                                        <ShowIcon id={item.id} onClick={handleShow} />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </>
    );
}