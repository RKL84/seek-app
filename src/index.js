import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root')
);
