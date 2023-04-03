import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './components/app/app.jsx';
import AppHeader from './components/app-header/app-header.jsx';
import Main from './components/main/main.jsx';

const el = React.createElement('h1', null, 'Здоровее видали');
//const el = <h1>Здоровее видали</h1>;

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <AppHeader />
    <Main />
  </React.StrictMode>
);

