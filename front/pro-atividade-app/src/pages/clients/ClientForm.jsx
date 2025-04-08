import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

export default function ClientForm() {
  const history = useHistory();
  const {id} = useParams();
  return (
    <>
    <TitlePage title={ "Client Details " + (id !== undefined ? id : "")}/>
    <Button 
      variant='outline-secondary'
      onClick={() => history.goBack()}>
      <i className='fas fa-arrow-left me-2'/>
      Voltar
    </Button>
    </>

  )
}
