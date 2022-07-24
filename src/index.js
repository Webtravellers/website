import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/scss/dijitalAsistan.scss'
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import './i18n';


const root = ReactDOMClient.createRoot(document.getElementById("root"));
const store = configureStore()
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();