import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);

serviceWorker.unregister();
