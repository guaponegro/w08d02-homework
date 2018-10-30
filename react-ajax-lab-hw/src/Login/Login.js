import React, { Component } from 'react';


class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
        }
    }
    handleInput = (e) => {
        console.log(e.currentTarget.name, e.currentTarget.value);
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username, true);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='username' onChange ={this.handleInput} value ={this.state.username} placeholder='username'/>
                <input type='password' name='password' onChange ={this.handleInput} value ={this.state.password} placeholder='password'/>
                <input type='submit' value='Login'/>
            </form>
        )
    }
}

export default Login;