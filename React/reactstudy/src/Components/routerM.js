import React,{Component} from 'react';
import JsxStudy from '../Components/JsxStudy'
import PropsStudy,{StateStudy} from '../Components/PropsStudy'
import {BrowserRouter as Router , Route,Link} from 'react-router-dom';
import App from '../App'

const BasicExample = ()=>(
    <Router>
      <div>
        <App></App>
        <ul>
          <li>
            <Link to="/">HOme</Link>
          </li>
          <li>
            <Link to="/PropsStudy">Props学习</Link>
          </li>
          <li>
            <Link to="/topics">topic</Link>
          </li>
          <li>
            <Link to="/StateStudy">State学习</Link>
          </li>
        </ul>
        <hr/>
        <Route exact  path="/" component={PropsStudy}></Route>
        <Route  path="/PropsStudy" component={JsxStudy}></Route>
        <Route  path="/topics" component={Topics}></Route>
        <Route  path="/StateStudy" component={StateStudy}></Route>
      </div>
    </Router>
  )
  

  

  
  const Topics=({match})=>(
    <div>
      <h2>topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
        </li>
      </ul>
      <hr/>
      <Route path={`${match.url}/:topicId`} component={Topic}></Route>
      <Route exact path={match.url} render={()=> <h3>Please select a topic.</h3>  } ></Route>
    </div>
  )
  
  const Topic =({match})=>(
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )

  export default BasicExample