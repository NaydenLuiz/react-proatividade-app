import { useState } from 'react';
import TitlePage from '../../components/TitlePage'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const clients =[
  {
    id:1,
    nome:"Microsoft",
    responsavel:"Bill Gates",
    telefone:"(11) 99999-9999",
    situacao:"Ativo",
  },
  {
    id:2,
    nome:"Google",
    responsavel:"Larry Page",
    telefone:"(11) 99999-9999",
    situacao:"Ativo",
  },
  {
    id:3,
    nome:"Apple",
    responsavel:"Steve Jobs",
    telefone:"(11) 99999-9999",
    situacao:"Ativo",
  },
  {
    id:4,
    nome:"Facebook",
    responsavel:"Mark Zuckerberg",
    telefone:"(11) 99999-9999",
    situacao:"Ativo",
  },
  {
    id:5,
    nome:"Amazon",
    responsavel:"Jeff Bezos",
    telefone:"(11) 99999-9999",
    situacao:"Ativo",
  }
]
export default function ClientList() {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState("");
  const handleInputChange = (event) => {
    setTermoBusca(event.target.value);
  }

  const filteredClients = clients.filter((client) => {
    //return client.nome.toLowerCase().includes(termoBusca.toLowerCase())
    //return client.nome.toLowerCase().indexOf(termoBusca.toLowerCase()) !== -1
    return Object.values(client).join("").toLowerCase().includes(termoBusca.toLowerCase());
  });
  const novoCliente = () => {
    navigate("/clients/details")
  }
  
  return (
    <>
        <TitlePage title={"Cliente Lista"}>
          <Button variant="outline-secondary" onClick={novoCliente}>
            <i className='fas fa-plus me-2' />
            Novo Cliente
          </Button>
        </TitlePage>
        <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>
          Buscar:
        </InputGroup.Text>
        <Form.Control
          placeholder="Buscar por nome do Cliente."
          onChange={handleInputChange}
        />
      </InputGroup>
        <table className="table table-striped table-hover">
          <thead className='table-dark mt-3'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Responsavel</th>
              <th scope="col">Situação</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client)=>(
            
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.nome}</td>
                <td>{client.responsavel}</td>
                <td>{client.situacao}</td>
                <td>
                <button 
                className='btn btn-outline-primary me-2 btn-sm'
                onClick={() => navigate(`/clients/details/${client.id}`)}>
                <i className="fas fa-user-edit me-2"></i>
                  Editar
                </button>
                <button className='btn btn-sm btn-outline-danger me-2'>
                  <i className="fas fa-user-times me-2"></i>
                  Excluir
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}
