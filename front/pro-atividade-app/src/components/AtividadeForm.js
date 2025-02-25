import { useEffect, useState } from 'react';

export default function AtividadeForm(props) {

    const atividadeInicial = {
        id: 0,
        titulo: "",
        prioridade: 0,
        descricao: ""
    }

    function atividadeAtual(){
        if(props.ativSelecionada.id !== 0){
            return props.ativSelecionada;
        }else
        {
            return atividadeInicial;
        }
    }

    const [atividade, setAtividade] = useState(atividadeAtual());
    useEffect(() => {
        if(props.ativSelecionada.id !== 0){
            setAtividade(props.ativSelecionada);
        }
    }, [props.ativSelecionada]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setAtividade({ ...atividade, [name]: value });
    }

    function atividadeAtual(){
        if(props.ativSelecionada.id !== 0){
            return props.ativSelecionada;
        }else
        {
            return atividadeInicial;
        }
    }
    const handleCancelar = (e) =>{
        e.preventDefault();

        props.cancelarAtividade();

        setAtividade(atividadeInicial);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.ativSelecionada.id !== 0){
            props.atualizarAtividade(atividade);
        }else{
            props.addAtividade(atividade);
        }

        setAtividade(atividadeInicial);
    }

    return (
        <>
            <h1>Atividade {atividade.id !==0 ? atividade.id : ""}</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
            <div class="col-md-6">
                    <label className="form-label">Titulo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titulo"
                        name="titulo"
                        value={atividade.titulo}
                        onChange={inputTextHandler}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Prioridade</label>
                    <select
                        id="prioridade"
                        name="prioridade"
                        value={atividade.prioridade}
                        onChange={inputTextHandler}
                        className="form-select">
                        <option defaultValue="0">Selecionar...</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={atividade.descricao}
                        onChange={inputTextHandler} />
                        <hr/>
                </div>
                <div className="col-12 mt-0">
                 {
                    atividade.id === 0 ?
                    <button className="btn btn-secondary" type="submit">
                        <i className="fas fa-plus me-2"></i>
                        Atividade
                    </button>
                    :
                    <>
                        <button className="btn btn-success me-2" type="submit">
                        <i className="fas fa-plus me-2"></i>
                           Salvar
                        </button>
                        <button className="btn btn-danger me-2"
                        onClick={handleCancelar}>
                        <i className="fas fa-plus me-2"></i>
                           Cancelar
                        </button>
                    </>
                }
                </div>
            </form>
        </>
    )
}