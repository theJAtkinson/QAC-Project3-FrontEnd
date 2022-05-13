import React, { useState } from 'react'
import { Container, Button, Form, FormGroup, FormLabel, Dropdown,} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {DayPicker} from "react-day-picker";
import 'react-day-picker/dist/style.css';
import './App.css';
import './index.css';
import axios from 'axios';




function Bookings(){
    // Lists from api
    const [movies, setMovies] = useState([]);
    const [screenings, setScreenings] = useState([]);

    // Created List
    const [screeningDates, setScreeningDates] = useState([]);
    // const [timings, setTimings] = useState([]);

    // Selected varibles
    const [movie_name, setMovieName] = useState('Please Select a Movie');
    const [show_time, setShowTime] = useState("Please Select A Time");
    const [show_date, setShowDate] = useState(new Date());
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no_adult, setAdult] = useState("");
    const [no_child, setChild] = useState("");
    const [no_concession, setConcession] = useState("");
    const [screening_id, setScreeningId] = useState("");

    // Element Hiding
    const [daySelector, setDaySelector] = useState('hidden');
    const [bookingForm, setBookingForm] = useState('hidden');

    // Counters
    const [i,setI] = useState(1);

    // Rehides all hidden features
    function reset(){
        setDaySelector('hidden');
        setBookingForm('hidden');
    }

    // Extracts date information from every screening and creates new list of just dates.
    function mapDates(){
        setScreeningDates(screenings.map((screening) => {
            return screening.show_date;
        }));
    }

    // API call for movies
    async function getMovies(num){
        // Checks if getMovies has run before from first menu selection
        if (num == 1) {
            if(num !== i){
                return;
            }
            if(i !== 2){
                setI(2);
            }
        }
        let res = await axios.get("http://localhost:4005/movie/read");
        setMovies(res.data);
    }

    function getTimes(){
        let timings = screenings.filter((screening)=>screening.show_date==show_date.toISOString());
        return(timings)
        console.log(timings)
    }

    // API call for list of screenings by movie_name, Also runs map dates so the date is useful.
    async function getScreenings(title){
        let res = await axios.get(`http://localhost:4005/movie/read/screening/${title}`);
        console.log(res.data);
        setScreenings(res.data);
        mapDates();
        setMovieName(title);
    }

    // Submits booking to API
    async function submitBooking(){
        let res = await axios.post("http://localhost:4005/booking/create",{
            "fullname": fullname,
            "email": email,
            "no_adult": no_adult,
            "no_child": no_child,
            "no_concession": no_concession,
            "screening_id": 6
        })
    }

    return (
        <div>
            <Container>
                {/* Movie Selection */}
                <h3 style={{ color: "white" }}>Select A Film From The List Below:</h3>

                <DropdownButton onClick={() => getMovies(1)} title={movie_name}>
                {movies.map((movie)=>{
                    return(
                        <Dropdown.Item as="button"><div 
                            onClick={(async () => {
                                await getScreenings(movie.movie_name);
                            }
                        )}  
                        >{movie.movie_name}</div></Dropdown.Item>
                    )
                })}
                </DropdownButton>
                <Button onClick={async () => {
                    /* Checks a selection has been made */
                    if(movie_name !== 'Please Select a Movie'){
                        mapDates();
                        setDaySelector("");
                    }
                }}>Show Dates</Button>

                {/* Date Selection */}
                <div hidden={daySelector}>
                    <DayPicker
                        mode="single"
                        required
                        selected={show_date}
                        disabled={day => {
                            /* Checks if day is in the past */
                            if(day < new Date()){
                                return true
                            }
                            /* Checks if day is not inside list */
                            let check = day.toISOString()
                            if(!screeningDates.includes(check)){
                                return true
                            }
                            /* Otherwise show date :) */
                            return false
                        }}
                        onSelect={setShowDate}
                        showOutsideDays
                    />
                    <br/><br/>
                {/* Timing selector */}
                <DropdownButton title={show_time}>
                {getTimes().map((times)=>{
                    return(
                        <Dropdown.Item as="button"><div 
                            onClick={(() => {
                                setShowTime(times.show_time)
                            }
                        )}  
                        >{times.show_time}</div></Dropdown.Item>
                    )
                })}
                </DropdownButton>
                <Button onClick={() => {
                        setBookingForm("");
                    }}>Show booking form</Button>
                </div>  
                {/* Form for creation of booking */}
                <div hidden={bookingForm}>
                    <Form>
                        <FormGroup>
                            <FormLabel style={{ color: "white" }}>Full Name:</FormLabel>
                            <Form.Control name="nameField" required onChange={(event) => setName(event.target.value)} value={fullname}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter your full name.
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel style={{color: "white"}}>Email:</FormLabel>
                            <Form.Control name="emailField" required onChange={(event) => setEmail(event.target.value)} value={email}/>
                            <Form.Control.Feedback type="invalid">
                                Please enter your email address.
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel style={{ color: "white" }}>Adult tickets:</FormLabel>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => setAdult(event.target.value)} value={no_adult} />
                            <Form.Control.Feedback type="invalid">
                                Please enter number of adult tickets
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel style={{ color: "white" }}>Child tickets:</FormLabel>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => setChild(event.target.value)} value={no_child} />
                            <Form.Control.Feedback type="invalid">
                                Please enter number of child tickets
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel style={{ color: "white" }}>Child tickets:</FormLabel>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => setConcession(event.target.value)} value={no_concession} />
                            <Form.Control.Feedback type="invalid">
                                Please enter number of concession tickets
                            </Form.Control.Feedback>
                        </FormGroup>
                    </Form>
                </div>
                <br/>
                <Button onClick={reset}>Reset</Button>
            </Container>
        </div>
    )
}
export default Bookings;