import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './pages/index';
import reportWebVitals from './reportWebVitals';
import PageBase from './components/layouts/PageBase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageBase>
      <App />
    </PageBase>
  </React.StrictMode>
);
reportWebVitals();
