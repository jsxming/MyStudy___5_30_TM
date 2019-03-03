import {Component} from "react"
import {connect,bindActionCreators} from 'redux'

class Hello extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.addNum,'func')
    }
    render(){
        return (
            <div>
                <h1>hello:{this.props.num}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        num:state.num
    }
}

function mapDispatchToprops(dispatch){
    return {
        addNum:bindActionCreators((id)=>{
            type:"ADD",
            id
        },dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToprops
)(Hello)


