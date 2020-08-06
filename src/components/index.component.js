import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component{

    constructor(props){
        super(props);
        this.state={business : []};

    }
    componentDidMount(){

        axios.get('http://localhost:4000/business')
        .then(response => {
            this.setState({business:response.data});
            
        }).catch(function(error){

            console.log(error);
            //console.error();
            
        });

    }
    tabRow(){
        return this.state.business.map(function(object, i){

            return<TableRow obj={object} key={i}/>
            

        });


        
    }



render(){

    return(
        <div>
           <h3 align = 'center'>Business List</h3>
           <div className=''>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}} >Today</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>Day2</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>Day3</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>Day4</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>Day5</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>Day6</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>Day7</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>This week</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>week2</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>week3</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>week4</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>This month</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month2</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month3</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month4</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month5</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month6</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month7</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month8</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month9</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month10</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month11</button>
           <button className="btn btn-primary btn mr-2 btn-sm" style={{marginTop:10}}>month12</button>
           </div>
          



           <table className='table table-striped' style={{marginTop:20}} >
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Business</th>
                    
                        <th>NIC Number</th>
                        <th>Date</th>
                        
                        
                        <th colSpan = '2'> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>

           </table>
        </div>
    );
}

}