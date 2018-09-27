import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './Components/routerM'


ReactDOM.render(
          <BasicExample></BasicExample>
    , document.getElementById('root'));
registerServiceWorker();
