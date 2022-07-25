import React, { Component } from 'react';
import trips from '../trips.json';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'all'
         }
    }
    filterall=(e)=>{
        this.setState({
            type:e.target.value
        });
    }
    filtertrek=(e)=>{
        this.setState({
            type:e.target.value
        });
    }
    filterclub=(e)=>{
        this.setState({
            type:e.target.value
        });
    }
    filtertrophie=(e)=>{
        this.setState({
            type:e.target.value
        });
    }
    render() { 
        return ( 
            <>
            <div className='table'>
              <table>
                  <tr>
                      <th>Date</th>
                      <th>Place</th>
                      <th>Type</th>
                  </tr>
                  
            {(this.state.type === 'all') && 
              trips.map((item)=>(
                <tr>
                    <td><span>{item.date}</span></td>
                    <td><span>{item.place}</span></td>
                    <td><span>{item.type}</span></td>
                </tr>
                )) }
                
                {(this.state.type === 'trek') && 
                trips.map((item)=>(
                    (item.type === 'Trek')&&
                <tr>
                        <td><span>{item.date}</span></td>
                        <td><span>{item.place}</span></td>
                        <td><span>{item.type}</span></td>
                    </tr>
                )) }
                {(this.state.type === 'club') && 
                trips.map((item)=>(
                    (item.type === 'Club')&&
                <tr>
                    <td><span>{item.date}</span></td>
                    <td><span>{item.place}</span></td>
                    <td><span>{item.type}</span></td>
                </tr>
                )) }
                {(this.state.type === 'trophie') && 
                trips.map((item)=>(
                    (item.type === 'Trophie')&&
                <tr>
                    <td><span>{item.date}</span></td>
                    <td><span>{item.place}</span></td>
                    <td><span>{item.type}</span></td>
                </tr>
                )) }
                
                </table>
                <div className='input'>
                    <input type='radio'value='all'name='type' onChange={this.filterall}/><span className="category"> - All</span>
                    <input type='radio'value='trek'name='type' onChange={this.filtertrek}/><span className="category"> - Trek</span>
                    <input type='radio'value='club'name='type' onChange={this.filterclub}/><span className="category"> - Club</span>
                    <input type='radio'value='trophie'name='type' onChange={this.filtertrophie}/><span className="category"> - Trophie</span>
                </div>
           </div>
            </>
         );
    }
}
 
export default List;