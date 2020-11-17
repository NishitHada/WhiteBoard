import React, { Component } from 'react'
import axios from 'axios'
import DLData from './DLData'
import './Dashboard.css'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedInUser: 'Nishit',
             subList: []
        }
    }

    componentDidMount(){
        axios.post(`http://localhost:5002/user/get-sublist`, {
            user_name: this.state.loggedInUser
        })
      .then(res => {
        // console.log(res);
        this.setState({ subList: res.data });
      })
    }
    
    render() {
        return (
            <div>
                {this.state.subList.map(dl => (
                    // <ViewDL key={dl} dl_name={dl} />
                    <DLData dl_name={dl} />
                ))}
                <div className="create-dl">
                    <button className="create-dl-btn"> + </button>
                </div>
            </div>
        )
    }
}

export default Dashboard
