import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function ClientForm() {
  const navigate = useNavigate();
  const {id} = useParams();
  return (
    <>
    <TitlePage title={ "Client Details " + (id !== undefined ? id : "")}/>
    <Button 
      variant='outline-secondary'
      onClick={() => navigate('/clients/list')}>
      <i className='fas fa-arrow-left me-2'/>
      Voltar
    </Button>
    </>

  )
}
