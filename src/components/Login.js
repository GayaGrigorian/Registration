import React from "react";
import Admin from "./Admin";

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password: '',
        }
        this.state={isLoggedIn: false};
         
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

    submitForm(e){
        const {username,password}=this.state
        e.preventDefault()
        const users=[
        {   
          id: 1,
          username: "John",
          password: '555',
        },
          {   
          id: 2,
          username: "Kate",
          password: '4356',
        }, 
        {   
          id: 3,
          username: "Sam",
          password: '7777',
        },
        {   
          id: 4,
          username: "Tom",
          password: '7878',
        }
        ]

        let result=users.find(user=>{
            return password===user.password && username===user.username
            })
            if (result?true:false){  
            this.setState({
                isLoggedIn:true
            })
        }else{
            alert("Enter a valid username/password")
        }
    }
    
    
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        if(this.state.isLoggedIn){
            return <Admin/>
        }
        return (
            <div className="Container">
                <form onSubmit={this.submitForm}>
                    <h1>Login</h1>

                    <label for="username"><b>Username</b></label>
                    <input type='text' name="username" value={this.state.username} onChange={this.onChange}/>
                    <br/>

                    <label for="password"><b>Password</b></label>
                    <input type='text' name="password" value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    
                    <button type="submit" className="button">LOGIN</button>

                </form>
            </div>
        )
        }
    }

    