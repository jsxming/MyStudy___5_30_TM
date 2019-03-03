import React from "react"
import {Link} from "react-router-dom"

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>home</h1>
                <hr/>   
                <Link to="/test">test</Link>
            </div>
        )
    }
}