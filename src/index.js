import React from 'react';
import ReactDOM from 'react-dom';
import './style/bootstrap-material-design.min.css';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
