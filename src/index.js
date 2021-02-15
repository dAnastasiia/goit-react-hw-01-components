//Модули
import React from 'react';
import ReactDOM from 'react-dom';

//Компоненты
import App from './components/App/App';

//Стили
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
