
import { Card } from "@/components/Card";

import Switch from "@/components/Switch";
import InputText from "@/components/Form/InputText";
import InputSelect from "@/components/Form/InputSelect";
import LineGroup from "./components/LineGroup";
import "./style.css";
import ImageUploader from "@/components/ImageUploader";
import InputDate from "@/components/Form/InputDate";


export default function Cadastrar() {

    const tipos_lista = [
        {
            value: "de-Por",
            label: "De / Por"
        },
        {
            value: "leve-pague",
            label: "Leve + Pague -"
        },
        {
            value: "porcentagem",
            label: "Percentual"
        }
    ];

    return (
        <>
            <div className="title">
                <h1>Cadastrar desconto</h1>
                <span>Loja: Super João - Nova loja online</span>
            </div>

            <Card.Root>
                <Card.Header>
                    Formulário cadastro cadastrados
                    <label>Ativo <Switch /></label>
                </Card.Header>
                <Card.Body>
                    <form className="form">
                        <InputText title="Nome do desconto" id="nome" />
                        <InputText title="Descrição do desconto" id="descricao" />
                        <InputSelect title="Tipo do desconto" id="tipo" values={tipos_lista} />

                        <LineGroup show={true}>
                            <InputText title='Preço "DE"' id="preco_de" />
                            <InputText title='Preço "POR"' id="preco_por" />
                        </LineGroup>

                        <LineGroup show={true}>
                            <InputText title="Preço" id="preco" />
                            <InputText title="Leve" id="leve" />
                            <InputText title="Pague" id="pague" />
                        </LineGroup>

                        <LineGroup show={true}>
                            <InputText title="Preço" id="preco" />
                            <InputText title="Percentual do desconto" id="percentual" />
                        </LineGroup>

                        <LineGroup>
                            <InputDate title="Data de ativação" id="data_ativacao" />
                            <InputDate title="Data de inativação" id="data_inativacao" />
                        </LineGroup>

                        <ImageUploader />

                    </form>

                </Card.Body>
            </Card.Root>


        </>
    );
}