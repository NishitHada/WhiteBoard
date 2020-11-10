import React, { Component } from 'react'
import axios from 'axios'

export class DLData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color: '',
            tasklist_collection_name: '',
            tasks: []
        }
    }

    async componentDidMount(){
        console.log(this.props);
        const dl_props_res = await axios.post(`http://localhost:5001/get-dl-props`, {
            "Name": this.props.dl_name
        })

        this.setState({
            color: dl_props_res.data['Color'],
            tasklist_collection_name: dl_props_res.data['tasklist_collection_name']
        })

        const tasks_res = await axios.post(`http://localhost:5001/get-tasks`, {
            "tasklist_collection_name": this.state.tasklist_collection_name
        })
        // console.log(tasks_res)
        this.setState({
            tasks: tasks_res.data
        })
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="dl" 
            style={{backgroundColor:this.state.color,
            border:"2px solid", padding:"8px",
            display:"inline-block"}} >
                {this.props.dl_name}
                
                {this.state.tasks.map(task => (
                    <ul>{task['Desc']}</ul>
                ))}
                
            </div>
        )
    }
}

export default DLData
