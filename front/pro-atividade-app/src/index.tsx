import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Menu from './components/Menu';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
      <Menu />
      <div className='container'>
          <App />
      </div>
  </Router>
);