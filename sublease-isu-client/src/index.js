import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Messaging from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Messaging />, document.getElementById('root'));
registerServiceWorker();
