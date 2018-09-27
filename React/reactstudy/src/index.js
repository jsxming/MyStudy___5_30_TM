import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './Components/routerM'
import Page1 from './Components/page/page1'



ReactDOM.render(
        //   <BasicExample></BasicExample>
        <Page1></Page1>
    , document.getElementById('root'));
registerServiceWorker();
