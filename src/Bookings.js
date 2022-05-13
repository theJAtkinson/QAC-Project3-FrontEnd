import React, { useState } from 'react'
import { Container, Button, Form, Dropdown, } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import './App.css';
import './index.css';
import axios from 'axios';




function Bookings() {
    // Lists from api
    const [movies, setMovies] = useState([]);
    const [screenings, setScreenings] = useState([]);

    // Created List
    const [screeningDates, setScreeningDates] = useState([]);

    // Selected varibles
    const [chosen_screening, setChosenScreening] = useState({});
    const [movie_name, setMovieName] = useState('Please Select a Movie');
    const [show_time, setShowTime] = useState("Please Select A Time");
    const [show_date, setShowDate] = useState(new Date());
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [no_adult, setAdult] = useState("0");
    const [no_child, setChild] = useState("0");
    const [no_concession, setConcession] = useState("0");

    // Element Hiding
    const [daySelector, setDaySelector] = useState('hidden');
    const [bookingForm, setBookingForm] = useState('hidden');

    // Counters
    const [i, setI] = useState(1);

    // Rehides all hidden features
    function reset() {
        setDaySelector('hidden');
        setBookingForm('hidden');
    }

    // Extracts date information from every screening and creates new list of just dates.
    function mapDates() {
        setScreeningDates(screenings.map((screening) => {
            return screening.show_date;
        }));
    }

    // API call for movies
    async function getMovies(num) {
        // Checks if getMovies has run before from first menu selection
        if (num == 1) {
            if (num !== i) {
                return;
            }
            if (i !== 2) {
                setI(2);
            }
        }
        let res = await axios.get("http://localhost:4005/movie/read");
        setMovies(res.data);
    }

    function getTimes() {
        let timings = screenings.filter((screening) => screening.show_date == show_date.toISOString());
        timings = timings.length != 0 ? timings : [{ "show_time": "Please Select A Date" }]
        return timings
    }

    // API call for list of screenings by movie_name, Also runs map dates so the date is useful.
    async function getScreenings(title) {
        let res = await axios.get(`http://localhost:4005/movie/read/screening/${title}`);
        setScreenings(res.data);
        setMovieName(title);
        return;
    }

    // Submits booking to API
    async function submitBooking(err) {
        err.preventDefault();
        let res = await axios.post("http://localhost:4005/booking/create", {
            "fullname": fullname,
            "email": email,
            "no_adult": no_adult,
            "no_child": no_child,
            "no_concession": no_concession,
            "screening_id": chosen_screening.screening_id
        })
    }

    return (
        <div>
            <Container>
                {/* Movie Selection */}
                <h3 style={{ color: "white" }}>Select A Film From The List Below:</h3>

                <DropdownButton onClick={() => getMovies(1)} title={movie_name}>
                    {movies.map((movie) => {
                        return (
                            <Dropdown.Item as="button"><div

                                onMouseDown={(() => {
                                    getScreenings(movie.movie_name);
                                })

                                }
                                onClick={(() => {
                                    mapDates();
                                    setDaySelector("");
                                    setShowTime("Please Select A Time")
                                }
                                )}

                            >{movie.movie_name}</div></Dropdown.Item>
                        )
                    })}
                </DropdownButton>

                {/* Date Selection */}
                <div style={{ "background-color": "white" }} hidden={daySelector}>
                    <DayPicker
                        mode="single"
                        required
                        selected={show_date}
                        disabled={day => {
                            /* Checks if day is in the past */
                            if (day < new Date()) {
                                return true
                            }
                            /* Checks if day is not inside list */
                            let check = day.toISOString()
                            if (!screeningDates.includes(check)) {
                                return true
                            }
                            /* Otherwise show date :) */
                            return false
                        }}
                        onSelect={(dateChosen) => {
                            setShowDate(dateChosen);
                            setShowTime("Please Select A Time")
                        }}
                        showOutsideDays
                    />
                    <br /><br />
                    {/* Timing selector */}
                    <DropdownButton title={show_time}>
                        {getTimes().map((time) => {
                            //console.log(time);
                            return (
                                <Dropdown.Item as="button"><div

                                    onMouseDown={(() => {
                                        setShowTime(time.show_time)
                                        setChosenScreening(time);
                                    })}

                                    onClick={(() => {
                                        if (!(time.show_time == "Please Select A Date" || time.show_time == "Please Select A Time")) {
                                            setBookingForm("");
                                        }
                                    }
                                    )}
                                >{time.show_time}</div></Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>

                {/* Form for creation of booking */}
                <div hidden={bookingForm}>
                    <Form onSubmit={submitBooking}>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Full Name:</Form.Label>
                            <Form.Control name="nameField" type="text" onChange={(event) => setName(event.target.value)} value={fullname} placeholder="John Smith" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter your full name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Email:</Form.Label>
                            <Form.Control name="emailField" type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="JohnSmith@wobble.com" required />

                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Adult tickets:</Form.Label>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => setAdult(event.target.value)} value={no_adult} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Child tickets:</Form.Label>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => setChild(event.target.value)} value={no_child} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Child tickets:</Form.Label>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => setConcession(event.target.value)} value={no_concession} required/>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </Container>
        </div >
    )
}
export default Bookings;