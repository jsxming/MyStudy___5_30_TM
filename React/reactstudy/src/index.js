import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './views/Home'
import Test from './views/Test'
import {Notpage} from './components/base.js'
import "./store"


ReactDOM.render(
        <Router>
            {/* Router下只能有一个根元素，否则报错。 */}
            <div>
                {/* <Switch>只找到第一个被location匹配到的<Route>就立即停止继续匹配，并且把它渲染出来 */}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/test" component={Test}></Route>
                    {/* 当没有匹配到的url对应的视图时显示该组件 */}
                    <Route component={Notpage}></Route>
                </Switch>
            </div>
        </Router>
    , document.getElementById('root'));
registerServiceWorker();
