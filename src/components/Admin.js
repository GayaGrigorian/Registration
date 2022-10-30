import './Admin.css'
import React from "react";
import Login from "./Login";


export default class Admin extends React.Component{
    constructor(props){
        super(props)
    
        this.state={isLoggedIn: true};
        this.handleClick=this.handleClick.bind(this)
        
    }

    handleClick(){
        this.setState({
            isLoggedIn:false
        })
    }

    render() {  
        const isLoggedIn = this.state.isLoggedIn 
        if(!isLoggedIn){
            return<Login/>
        }
        return(
            <div>
                <h1 className='Title'>WELCOME</h1>
                <button className='Button' onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}