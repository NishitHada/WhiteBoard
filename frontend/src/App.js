import React, { Component } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import DLData from './DLData'
import "./App.css";

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
        {/* <DLData dl_name="Company-wide" /> */}
        {/* <DLData dl_name="Dev" /> */}
        {/* <ViewDL dl_name="Company-wide" /> */}
        {/* <ViewDL dl_name="Dev" /> */}
        {/* <TaskList tasklist_collection_name="Company-wide-tasklist" /> */}
        {/* <TaskList tasklist_collection_name="Dev-tasklist" /> */}
        {/* {( () => {
          if(this.state.isLoggedIn)
          {
            return <div> Hello </div>
          }
          else return <Login />
        }
        ) ()} */}
      </div>
    )
  }
}

export default App
