import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id:1,
    titulo:"Primeira Atividade",
    descricao:"Primeira Atividade",
    prioridade: "1"
  },
  {
    id:2,
    titulo:"Segunda Atividade",
    descricao:"Segunda Atividade",
    prioridade: "1"
  },
  {
    id:3,
    titulo:"Terceira Atividade",
    descricao:"Terceira Atividade",
    prioridade: "1"
  }
];

function App() {
  const[atividades, setAtividades] = useState(initialState)

  
  function addAtividade(e){
    e.preventDefault();
    const atividade = {
      id: document.getElementById("id").value,
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
      prioridade: document.getElementById("prioridade").value
    }

    setAtividades([...atividades, {...atividade}]);
  }

  function deletarAtividade(id)
  {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id != id);
    setAtividades([... atividadesFiltradas]);
  }

  function prioridadeLabel(param)
  {
    switch(param)
    {
      case "1":
      return "baixa";
      case "2":
      return "Normal";
      case "3":
      return "Alta";
      default:
      return "Não Definido";
    }
  }


  function prioridadeStyle(param, icone)
  {
    switch(param)
    {
      case "1":
        return icone ? "smile" : "success";
      case "2":
        return icone ? "meh" : "dark";
      case "3":
        return icone ? "frown" : "warning";
      default:
        return "Não Definido"

    }
  }

  return (
    <>
     <form className="row g-3">
        <div className="col-md-6">
          <label for="id" className="form-label">Id</label>
          <input id="id" type="text" className="form-control" readOnly
          value={Math.max.apply(Math, atividades.map(item => item.id)) + 1 }/>
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div class="col-md-6">
          <label className="form-label">Titulo</label>
          <input type="text" className="form-control" id="titulo"/>
        </div>
        <div class="col-md-6">
          <label className="form-label">Descrição</label>
          <input type="text" className="form-control" id="descricao"/>
        </div>
        <div className="col-12">
          <button className="btn btn-secondary" onClick={addAtividade}>Add Atividade</button>
        </div>
     </form>
     <div className="mt-3">
        {atividades.map(ativ =>(
            <div key={ativ.id} className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)}>
              <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                      <span className="badge bg-secondary me-1">
                        {ativ.id}
                      </span>
                      - {ativ.titulo}
                    </h5>
                    <h6>
                      Priodidade:
                      <span className={"ms-1 text-" + prioridadeStyle(ativ.prioridade)}>
                        <i className={"me-1 far fa-" + prioridadeStyle(ativ.prioridade,true)}></i>
                        {prioridadeLabel(ativ.prioridade)}
                      </span>
                    </h6>
                  </div>
                    <p className="card-text">
                        {ativ.descricao}
                    </p>
                    <div className="d-flex justify-content-end pt-2 m-0 border-top">
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <i className="fas fa-pen me-2"></i>
                        Editar
                      </button>
                      <button 
                      className="btn-sm btn btn-outline-danger"
                      onClick={()=>deletarAtividade(ativ.id)}
                      >
                      <i className="fas fa-trash me-2"></i>
                        Deletar
                      </button>
                    </div>
               </div>
            </div>
            ))
          }
      </div>
    </>
  );
}

export default App;
