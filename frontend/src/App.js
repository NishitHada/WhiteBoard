import React, { Component } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import TaskList from './TaskList'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: 0
    }
  }
  
  render() {
    return (
      <div>
        <Dashboard />
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
