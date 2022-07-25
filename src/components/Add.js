import React, { Component } from 'react';
import trips from '../trips.json';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            place: '',
            type: ''
        }
    }
    renderDate = (e) => {
        this.setState({ 
            date: e.target.value 
        });
    }
    renderPlace = (e) => {
        this.setState({ 
            place: e.target.value 
        });
    }
    renderType = (e) => {
        if (e.target.value !== "") {
            this.setState({ 
                type: e.target.value 
            });
        }
    }
    submitButton = () => {
        document.getElementById("s1").innerHTML = "Submitted";
        trips.push(this.state)
        this.setState({
            date: '',
            place: '',
            type: ''
        });
    }
    render() {
        return (
            <>
                <center> 
                    <div className="home">
                    <h1>Add a trip</h1>
                    <div className="add">
                        <label>Date:</label>
                        <div className="div-inp">
                        <input className='inputs' type='date' onChange={this.renderDate}></input>
                        </div>
                        <label>Place:</label>
                        <div className="div-inp">
                            <input className='inputs' type='text' onChange={this.renderPlace}></input>
                        </div>
                        <label>Type:</label>
                        <div className="div-inp">
                            <select className='inputs' onClick={this.renderType}>
                                <option value=""></option>
                                <option value="Trek">Trek</option>
                                <option value="Club">Club</option>
                                <option value="Trophie">Trophie</option>
                            </select>
                        </div>
                        <div className="div-inp">
                        <button type='submit' className='but' onClick={this.submitButton}>Submit</button>
                        </div>
                        <span id="s1"></span>
                    </div></div>
                </center>
            </>
        );
    }
}

export default Add;