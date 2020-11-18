import React, { Component } from 'react'
import axios from 'axios'
import './Task.css'

export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ParentDL: props.ParentDL,
            _id: props._id
        }
    }

    deleteTask = (event) => {
        console.log(this.state)
        axios.post(`http://localhost:5002/tasks/remove-task`,
        this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return (
        <div className="task">
            {this.props['Desc']}
            <button className='mark-task' 
            onClick={this.deleteTask}> X </button>
        </div>
        )
    }
}

export default Task
