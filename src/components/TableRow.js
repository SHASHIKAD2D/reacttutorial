import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
           <tr>
            <td>{this.props.obj.person_name}</td>
            <td>{this.props.obj.business_name}</td>
            <td>{this.props.obj.person_nic_name}</td>
            <td>{this.props.obj.person_nic_name}</td>
            <td>
                <button className='btn btn-primary'>Edit</button>

            </td>
            <td>
                <button className='btn btn-primary'>Delete</button>
            </td>


           </tr>
        );
    }
}
 
