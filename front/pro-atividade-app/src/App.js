import './App.css';
import React from 'react'
import Atividade from './pages/atividades/Atividade';
import {Route} from 'react-router-dom';
import ClientForm from './pages/clients/ClientForm';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Client from './pages/clients/Client';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
export default function App()
{
  return(
    <Switch>
      <Route path='/' exact component={Dashboard}></Route>
      <Route path='/atividades' component={Atividade}></Route>
      <Route path='/atividades/list' component={Atividade}></Route>
      <Route path='/clients/list' component={Client}></Route>
      <Route path='/clients/details/:id?' component={ClientForm}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  );
}

