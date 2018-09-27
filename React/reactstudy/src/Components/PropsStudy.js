import React from 'react'

function Welcome(props){
    return <h1>hello {props.name}</h1>
}

function User(){
    return <h1>User</h1>
}

function Admin(){
    let arr = [1,2,3,4,5];
    let list = arr.map((v,i)=>{
        return <li key={i}>{v}-----{i}</li>
    })
    return (
        <div>
            <h1>Admin</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}


function GetPerson(props){
    let isAdmin = props.Admin;
    // 条件渲染
    if(isAdmin){
        return <Admin></Admin>
    }
    return <User></User>
}


class PropsStudy extends React.Component{
    constructor(props){
        super(props)
        // react组件的props是单向数据流，不可更改
    }
    render(){
        return <div>
           <Welcome name="TM"></Welcome> 
        </div>
    }
}


export class StateStudy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:20,
            inputValue:"hello world"
        }
    }
    render() {
      return (
        //   事件绑定
        <div onClick={(e)=>{this.addAge("-----",e)}}>
            <GetPerson Admin={true}></GetPerson>
            <h1>{this.state.age}</h1>            
            <input type="text" value={this.state.inputValue} onChange={this.changeInputValue.bind(this)}/>

        </div>
      )
    }
    addAge(str){
        console.log(str)
    }
    changeInputValue(event){
        this.setState({
            inputValue:event.target.value
        })
    }
}



export default PropsStudy