import React, { Component } from 'react'
import axios from 'axios'

export class TaskList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tasks: []
        }
    }
    

    componentDidMount(){
        axios.post(`http://localhost:8001/get-tasks`, {
            "tasklist_collection_name": this.props.tasklist_collection_name
        })
      .then(res => {
        console.log('Printing tasks:');
        console.log(res.data[0]);
        console.log(res.data[1])
        res.data.map(task => (
            console.log(task['Desc'])
        ))
        this.setState({
            tasks: res.data
        })
        // console.log('Printing tasks:', this.state)
      })
    }

    render() {
        return (
            <div>
                {this.state.tasks.map(task =>(
                <ul> {task['Desc']} </ul>    
                ))}
            </div>
        )
    }
}

export default TaskList
