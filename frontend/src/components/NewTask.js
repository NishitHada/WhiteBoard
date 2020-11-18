import React, { Component } from 'react'
import axios from 'axios'
import './NewTask.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;
export class NewTask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ParentDL: props.ParentDL,
            Desc: ''
        }
    }

    handleDesc = (event) => {
        this.setState({
            Desc: event.target.value
        })
    }

    addTask = (event) => {
        // event.preventDefault();
        console.log(this.state)
        axios.post(`http://localhost:5002/tasks/add-task`,
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
            <div>
                <form onSubmit={this.addTask} className='new-task-form'>
                    <div className='new-task-container'>
                    <div >
                        <input type='text' 
                        className='new-task-desc'
                        label='Add new task here'
                        value={this.state.Desc} onChange={this.handleDesc} />
                    </div>
                    <div className='add-button-container'>
                        <button className="add-btn" type='submit'>+</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTask
