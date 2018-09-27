import React from 'react'
import imgsrc from '../img/gz.png' //引入本地img的方式1


function El(str){
    return <div>
        <h1>hello {str}</h1>
    </div>
}


class JsxStudy extends React.Component{
    render(){
        return (
            <div>
                {El("JSX")}
                <h1>//引入本地img的方式2：使用require函数</h1>
                <img src={require('../img/dog.png')} alt=""/> 
                <img src={imgsrc} alt=""/>
            </div>
        )
    }
}

export default JsxStudy