import Switch from "@/components/Switch";
import ProductGroup from "../ProductGroup";
import ShowIcon from "../ShowIcon";

export default function Datatable() {
    return (
        <>
            <table className="table">
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
                    <tr>
                        <td><ProductGroup /></td>
                        <td>Leve + Pague -</td>
                        <td>30/12/2023 - 10:25</td>
                        <td>30/12/2023 - 10:25</td>
                        <td width='5%'>
                            <div className="table_actions"> 
                                <Switch />
                                <ShowIcon />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><ProductGroup /></td>
                        <td>Leve + Pague -</td>
                        <td>30/12/2023 - 10:25</td>
                        <td>30/12/2023 - 10:25</td>
                        <td width='5%'>
                            <div className="table_actions"> 
                                <Switch />
                                <ShowIcon />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><ProductGroup /></td>
                        <td>Leve + Pague -</td>
                        <td>30/12/2023 - 10:25</td>
                        <td>30/12/2023 - 10:25</td>
                        <td width='5%'>
                            <div className="table_actions"> 
                                <Switch />
                                <ShowIcon />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}