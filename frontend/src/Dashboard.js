import React, { Component } from 'react'
import axios from 'axios'
import ViewDL from './ViewDL'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loggedInUser: 'Nishit',
             subList: []
        }
    }

    componentDidMount(){
        axios.post(`http://localhost:8001/get-sublist`, {
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
                    <ViewDL dl_name={dl} />
                ))}
            </div>
        )
    }
}

export default Dashboard
