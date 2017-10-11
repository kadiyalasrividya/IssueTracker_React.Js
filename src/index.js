import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderComponent from './headerComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HeaderComponent />, document.getElementById('root'));
registerServiceWorker();
