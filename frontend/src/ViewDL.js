import React, { Component } from 'react'
import axios from 'axios'
import TaskList from './TaskList'

export class ViewDL extends Component {
    constructor(props) {
        super(props)
        // console.log(props)

        this.state = { 
            color: '',
            taskListCollectionName: ''
        }
    }
    
    
    componentDidMount(){
        axios.post(`http://localhost:8001/get-dl-props`, {
            "Name": this.props.dl_name
        })
      .then(res => {
        // console.log(res);
        this.setState({
            color: res.data['Color'],
            taskListCollectionName: res.data['tasklist_collection_name']
        })
        console.log(this.state)
        // this.setState({ subList: res.data });
      })
    }
    render() {
        return (
            // <div>
            <div className="dl" 
            style={{backgroundColor:this.state.color,
            border:"2px solid", padding:"8px",
            display:"inline-block"}} >
                {this.props.dl_name}
                <TaskList tasklist_collection_name={this.taskListCollectionName}/>
            </div>
        )
    }
}

export default ViewDL
