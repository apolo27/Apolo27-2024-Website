import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './fonts/nasalization-rg.otf';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import './services/i18n'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <App/>
    </Router>
  </React.StrictMode>
);