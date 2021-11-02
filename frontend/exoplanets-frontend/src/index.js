import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

const options = {
  position: "bottom center",
  timeout: 3000,
  offset: "30px",
  transition: "scale",
  type: "success"
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
