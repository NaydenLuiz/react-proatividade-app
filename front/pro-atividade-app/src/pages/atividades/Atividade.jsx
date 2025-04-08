import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from '../../api/atividade';
import AtividadeLista from './AtividadeLista';
import AtividadeForm from './AtividadeForm'
import TitlePage from '../../components/TitlePage';

function Atividade() {
  const [index] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [smShowConfirmModal, setsmShowConfirmModal] = useState(false);

  const handleClose = () => setShowAtividadeModal(false);

  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);
  const handleConfirmModal = (id) =>
    {
      if(id !== 0 && id !== undefined)
      {
        const atividade = atividades.filter((atividade) => atividade.id === id);
        setAtividade(atividade[0]);
      }else
      {
        setAtividade({ id:0 });
      }
      setsmShowConfirmModal(!smShowConfirmModal);
    } 
  const pegaTodasAtividades = async () => {
    const response = await api.get('atividade');
    console.log(response.data);
    return response.data;
  }

  const novaAtividade = () =>
  {
    setAtividade({ id: 0 });
    handleAtividadeModal();
  }

  useEffect(() => {

    const getAtividades = () => {
      pegaTodasAtividades().then((data) => {
        if (data) {
          setAtividades(data);
        }
      });

    }

    getAtividades();
  }, []);

  const addAtividade = async (ativ) => {
    const response = await api.post('atividade', ativ);
    setAtividades([...atividades, response.data]);
    handleAtividadeModal();
  }

  const atualizarAtividade = async (atividade) => {
    const response = await api.put(`atividade/${atividade.id}`, atividade);
    const { id } = response.data;
    setAtividades(atividades.map(item => item.id === id ? response.data : item));
    setAtividade({ id: 0 });
    handleAtividadeModal();
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 });
    handleAtividadeModal();
  }

  const deletarAtividade = async (id) => {
    handleConfirmModal(0);
    if (await api.delete(`atividade/${id}`)) {
      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesFiltradas]);
    }
  }
  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
    handleAtividadeModal();
  }


  return (
    <>
       <TitlePage
                title={'Atividade ' + (atividade.id !== 0 ? atividade.id : '')}
            >
                <Button variant='outline-secondary' onClick={novaAtividade}>
                    <i className='fas fa-plus'></i>
                </Button>
            </TitlePage>  
       
      <AtividadeLista
        atividades={atividades}
        handleConfirmModal={handleConfirmModal}
        pegarAtividade={pegarAtividade}
      />

      <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Atividade {atividade.id !==0 ? atividade.id : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            atualizarAtividade={atualizarAtividade}
            cancelarAtividade={cancelarAtividade}
            ativSelecionada={atividade}
            atividades={atividades} />
        </Modal.Body>
      </Modal>

      <Modal
        show={smShowConfirmModal}
        onHide={handleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Excluindo Atividade {' '}
             {atividade.id !==0 ? atividade.id : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem Certeza que deseja Deletar ou Excluir a Atividade {atividade.id}?
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button className='me-2' variant='outline-success' onClick={() => deletarAtividade(atividade.id)}>
            <i className='fas fa-check me-2' />
            Sim
          </Button>
          <Button className='me-2' variant='outline-danger' onClick={() => handleConfirmModal(0)}>
            <i className='fas fa-times me-2' />
            Não
          </Button>
          </Modal.Footer>
      </Modal>


    </>
  );
}

export default Atividade;
