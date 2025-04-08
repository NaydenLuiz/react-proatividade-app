import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
      <Menu></Menu>
      <div className="container">
      <App />
      </div>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
