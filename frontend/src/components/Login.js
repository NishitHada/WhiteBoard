import React, { Component } from 'react'
import axios from 'axios'
// var querystring = require('querystring');

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: 0,
             user_name: '',
             password: ''
        }
    }

    handle_uname = (event) => {
        this.setState({
            user_name: event.target.value
        })
    }

    handle_pwd = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:8001/login', 
        // {this.state.user_name, this.state.password})
        {
            "user_name": this.state.user_name,
            "password": this.state.password
        })
        // JSON.stringify(this.state.user_name, this.state.password))
        // querystring.stringify(this.state.user_name, this.state.password))
        .then(response => {
            console.log(response)
            // if(response)
        })
        .catch(error => {
            console.log(error)  
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='username'>
                        <label>Username:</label>
                        <input type='text'
                        value={this.state.user_name}
                        onChange={this.handle_uname} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='text' 
                        onChange={this.handle_pwd}
                        value={this.state.password} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login
