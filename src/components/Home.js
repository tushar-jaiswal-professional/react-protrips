import trips from '../trips.json';
import '../index.css'
import React, { Component } from 'react'
import sun from './sun.svg';
import trek from './trek.svg';
import trophy from './trophy.svg';

 class Home extends Component {
    trekCount=()=>{
        var count = 0;
        for(var i=0;i<trips.length;i++){
            if(trips[i].type === 'Trek'){
                count++;
            }
        }
        return count;
    }
    clubCount=()=>{
        var count = 0;
        for(var i=0;i<trips.length;i++){
            if(trips[i].type === 'Club'){
                count++;
            }
        }
        return count;
    }
    trophieCount=()=>{
        var count = 0;
        for(var i=0;i<trips.length;i++){
            if(trips[i].type === 'Trophie'){
                count++;
            }
        }
        return count;
    }
    render() { 
        return ( 
            <>
            <div className='home'>
            <center><div className='trips'><span className='display'>{trips.length}</span>trips</div></center>
            <div className='homelist'>
            <div><span  className='display'>{this.trekCount()}</span><img src={trek} alt="" className='logo-small'/></div>
            <div><span className='display'>{this.clubCount()}</span><img src={sun} alt="" className='logo-small'/></div>
            <div><span className='display'>{this.trophieCount()}</span><img src={trophy} alt="" className='logo-small'/></div>
            </div>
            </div>
            </>
         );
    }
}
export default Home;