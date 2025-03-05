import { useState, useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade';
function App() {
  const [index] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});

  const pegaTodasAtividades = async () =>
  {
    const response = await api.get('atividade');
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    
    const getAtividades = () =>
    {
      pegaTodasAtividades().then((data) => {
        if(data)
          {
            setAtividades(data);
          }
      });

    }

      getAtividades();
    }, []);

  function addAtividade(ativ) {
    setAtividades([...atividades, { ...ativ, id: index }]);
  }

  function atualizarAtividade(atividade) {
    setAtividades(atividades.map(item => item.id === atividade.id ? atividade : item));
    setAtividade({id:0});
  }

  function cancelarAtividade(){
    setAtividade({id:0});
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }
  function pegarAtividade(id) {
    console.log(id);
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);

  }


  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        ativSelecionada={atividade}
        atividades={atividades} />
      
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
