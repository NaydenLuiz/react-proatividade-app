import './App.css';
import React from 'react'
import Atividade from './pages/atividades/Atividade';
import {Route, Routes} from 'react-router-dom';
import ClientForm from './pages/clients/ClientForm';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Client from './pages/clients/Client';

const App: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/atividades/*' element={<Atividade/>}/>
      <Route path='/atividades/list' element={<Atividade/>}/>
      <Route path='/clients/*' element={<Client/>}/>
      <Route path='/clients/details/:id' element={<ClientForm/>}/>
      <Route path='/clients/details' element={<ClientForm/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>

  );
}
export default App;

