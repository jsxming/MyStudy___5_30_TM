import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';



function Welcome(props){
  // name与<Welcome name="TM"></Welcome>的name属性对应
  return <h1>hello{props.name}</h1>
}

function Coms(){

  return <div>
    <Welcome name="TM"></Welcome>
    <Welcome name="小明"></Welcome>
    <Welcome name="苹果"></Welcome>
  </div>
}




class App extends Component {
  constructor(props){
    super(props);
    this.btnClick = this.btnClick.bind(this); //初始化函数的this绑定
    this.logInput = this.logInput.bind(this);
  }
  btnClick(){
    console.log(111)
    console.log(this)
  }
  btn2Click =()=>{
    console.log(222)
    console.log(this)
  }
  logInput(){
    console.log(this.refs.myinput)
  }
  render() {
    return (
      <div className="App">
        <NavLink to="/Apage">AAAA</NavLink>
        <NavLink to="/Bpage">BBBB</NavLink>
        <header className="App-header">
          <Coms></Coms>
          <input type="text" ref="myinput" onInput={this.logInput}/>
          <h1 className="App-title" onClick={this.btn2Click}>btn2CLick</h1>
        </header>
      </div>
    );
  }
}

export default App;
