import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/style.scss'
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react';
import cardSliderStore from './stores/cardSliderStore'

const stores = {
  cardSliderStore: new cardSliderStore()
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
    </Provider>,
         document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
