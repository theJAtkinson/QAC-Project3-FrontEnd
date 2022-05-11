import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap';
import { renderMatches } from 'react-router-dom';
import './App.css';
import './index.css';
import axios from 'axios';

class Bookings extends Component {
constructor(){
    super();
    this.state = {
        movies:[],
        show_dates: [],
        show_times: [],
        screenings: [],
        fullname: "",
        email: "",
        no_adult: "",
        no_child: "",
        no_concession: "",
        screening_id: ""
    }
    this.handleChangeFullName = this.handleChangeFullName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeAdult = this.handleChangeAdult.bind(this)
    this.handleChangeChild = this.handleChangeChild.bind(this)
    this.handleChangeConcession = this.handleChangeConcession.bind(this)

}

handleChangeFullName(event){
    this.setState({
        fullname: event.target.value
    })
}

handleChangeEmail(event){
    this.setState({
        email: event.target.value
    })
}

handleChangeAdult(event){
    this.setState({
        no_adult: event.target.value
    })
}

handleChangeChild(event){
    this.setState({
        no_child: event.target.value
    })
}

handleChangeConcession(event){
    this.setState({
        no_concession: event.target.value
    })
}

async getMovies(){
    let res = await axios.get("http://localhost:4005/movie/read")
    console.log("processed")
    this.setState({
        movies: res.data
    })
}

async submitBooking(){
    let res = await axios.post("http://localhost:4005/booking/create",{
        "fullname": this.state.fullname,
        "email": this.state.email,
        "no_adult": this.state.no_adult,
        "no_child": this.state.no_child,
        "no_concession": this.state.no_concession,
        "screening_id": 6
    })
}

    render() {

        return (

            <div>
                <Container>
                    <h3 style={{ color: "white" }}>Select A Film From The List Below:</h3>
                    <select name="movies" id="entertainment" onClick={() => this.getMovies()}>
                        {this.state.movies.map((movie)=>{
                            return(
                                <option value={movie.movie_name}>{movie.movie_name}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <br/>
                    <br/>
                    <h4 style={{ color: "white" }}>Select A Date and Time For Screening:</h4>
                    <input type="datetime-local" id="info" name="show_time"/>
                    <br/>
                    <br/>
                    <br/>
                    <legend style={{color:"white"}}>Enter Your Booking Information</legend>
                        <form style={{color:"white"}}>
                            <label for="fname">Full Name:</label>
                            <input type="text" value={this.state.fullname} onChange={this.handleChangeFullName} id="fname" name="fname"></input><br/>
                            <label for="email">Email Address:</label>
                            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} id="email" name="email"></input><br/>
                            <label for="a_tickets">No. of Adult Tickets:</label>
                            <input type="number" value={this.state.no_adult} onChange={this.handleChangeAdult} id="tix" name="tickets"></input><br/>
                            <label for="children">No. of Children</label>
                            <input type="number" value={this.state.no_child} onChange={this.handleChangeChild} id="n_kids" name="children"></input><br/>
                            <label for="concessions">No. of Concessions:</label>
                            <input type="number" value={this.state.no_concession} onChange={this.handleChangeConcession} id="c_ticket" name="concessions"></input><br/>
                            <select name="concession types" id="conctype">
                                <option value="Student">Student</option>
                                <option value="Over 60s">Over 60</option>
                                <option value="Disabled">Disabled</option>
                            </select>
                        </form>
                        <button onClick={()=> this.submitBooking()}>Submit</button>
                </Container>
            </div>

        )
    }
}
export default Bookings;