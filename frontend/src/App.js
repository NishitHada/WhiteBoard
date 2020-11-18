import React, { Component } from 'react'

import Dashboard from './components//Dashboard'

import "./App.css";

// import Login from './Login'
// import DLData from './DLData'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: 0
    }
  }
  
  render() {
    return (
      <div className="main">
        <div className='heading'> 
          <h1>WhiteBoard</h1>
        </div>
        <div className="bbody">
          <div className="dashboard" >
            <Dashboard />
          </div>
          <div className="filter">
            Filter
          </div>
        </div>
      </div>
    )
  }
}

export default App
