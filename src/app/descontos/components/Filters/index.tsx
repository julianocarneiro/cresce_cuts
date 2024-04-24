
// componente Filters

export default function Filters() {
    return (
        <div className="filters">
            <div className="input-group">
                <label htmlFor="filter_status">Status</label>
                <select id="filter_status" name="filter_status" >
                    <option value="">Ativo</option>
                    <option value="">Inativo</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="filter_tipo_desconto">Tipo desconto</label>
                <select id="filter_tipo_desconto" name="filter_tipo_desconto">
                    <option value="">Desconto</option>
                    <option value="">Cupom</option>
                </select>
            </div>
        </div>
    );
}