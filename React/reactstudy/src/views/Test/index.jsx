import React from "react"
import {Link,Route} from "react-router-dom"
import {Param} from '../../components/base.js'

export default class Test extends React.Component{
    goBack = (index)=>{
        console.log(index);
        window.history.go(index);
    }  
    render(){
        return (
            <div>
                <h1>test</h1>
                <hr/>
                {/* 调用该该类的方法并传参的两种方法 */}
                <button onClick={()=>this.goBack(-1)}>back</button>
                <hr/>
                <button onClick={this.goBack.bind(this,-1)}>back 2</button>
                <hr/>
                <h4>
                    <Link to="/test/param/2">点击展示子路由</Link>
                </h4>
                
                <Route path={`${this.props.match.url}/param/:id`} component={Param} />
            </div>
        )
    }
}