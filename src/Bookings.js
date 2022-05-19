import React, { useEffect, useState } from 'react'
import { Container, Button, Form, Dropdown, } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import PayPalCheckoutButton from './components/PayPalCheckoutButton.js'
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

function Bookings() {
    const ADULT_PRICE = 15;
    const CHILD_PRICE = 8;
    const CONCESSION_PRICE = 10;

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

    // for Paypal
    const [checkOut, setCheckOut] = useState(false);
    const [tickets, setTickets] = useState([]);

    // Element Hiding
    const [daySelector, setDaySelector] = useState('hidden');
    const [bookingForm, setBookingForm] = useState('hidden');

    function displayAdultTicket(){
        return no_adult === "0" ? "" : no_adult + ` Adult ticket${no_adult === "1" ? "" : "s"}`;
    }

    function displayChildTicket(){
        return no_child === "0" ? "" : no_child + ` Child ticket${no_child === "1" ? "" : "s"}`;
    }

    function displayConcessionTicket(){
        return no_concession === "0" ? "" : no_concession + ` Concession ticket${no_concession === "1" ? "" : "s"}`;
    }

    function orderProduct(){
        let product = {
            "description": `${displayAdultTicket()} ${displayChildTicket()} ${displayConcessionTicket()}`,
            "price": (ADULT_PRICE*no_adult) + (CHILD_PRICE*no_child) + (CONCESSION_PRICE*no_concession)
        }
        return product;
    }

    // Extracts date information from every screening and creates new list of just dates.
    function mapDates() {
        setScreeningDates(screenings.map((screening) => {
            return screening.show_date;
        }));
    }

    useEffect(()=> {
        getMovies()
    }, []);

    // API call for movies
    async function getMovies() {
        let res = await axios.get("http://localhost:4005/movie/read");
        setMovies(res.data);
    }

    // Returns a list of timings for the chosen film name
    function getTimes() {
        let timings = screenings.filter((screening) => screening.show_date === show_date.toISOString());
        timings = timings.length !== 0 ? timings : [{ "show_time": "Please Select A Date" }]
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
        });
        setCheckOut(true);
        setTickets(orderProduct());
        return res;
    }

    return (
        <div>
            <Container>
                {/* Movie Selection */}
                <h3 style={{ color: "white" }}>Select A Film From The List Below:</h3>

                <DropdownButton title={movie_name}>
                    {movies.map((movie) => {
                        return (
                            <Dropdown.Item as="button"><div

                                onMouseDown={(() => {
                                    getScreenings(movie.movie_name);
                                })}
                                
                                onClick={(() => {
                                    mapDates();
                                    setDaySelector("");
                                    setShowTime("Please Select A Time");
                                })}
                            >{movie.movie_name}</div></Dropdown.Item>
                        )
                    })}
                </DropdownButton>

                {/* Date Selection */}
                <div hidden={daySelector}>
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
                            return (
                                <Dropdown.Item as="button"><div

                                    onMouseDown={(() => {
                                        setShowTime(time.show_time)
                                        setChosenScreening(time);
                                    })}

                                    onClick={(() => {
                                        if (!(time.show_time === "Please Select A Date" || time.show_time === "Please Select A Time")) {
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
                    <br />
                    <Form onSubmit={submitBooking}>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Full Name:</Form.Label>
                            <Form.Control name="nameField" type="text" onChange={(event) => setName(event.target.value)} value={fullname} placeholder="John Smith" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Email:</Form.Label>
                            <Form.Control name="emailField" type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="JohnSmith@wobble.com" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Adult tickets £{ADULT_PRICE}:</Form.Label>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => {setAdult(event.target.value); setCheckOut(false)}} value={no_adult} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Child tickets £{CHILD_PRICE}:</Form.Label>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => {setChild(event.target.value); setCheckOut(false)}} value={no_child} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label style={{ color: "white" }}>Concession tickets £{CONCESSION_PRICE}:</Form.Label>
                            <Form.Control type="Number" min={0} max={30} onChange={(event) => {setConcession(event.target.value); setCheckOut(false)}} value={no_concession} required />
                        </Form.Group>
                        <br/>
                        <Button type="submit">Submit</Button>
                    </Form>
                    {checkOut === true &&
                        <div>
                            <br/>
                            <h5>
                                {no_adult !== "0" && <div>{displayAdultTicket()}<br/></div>}
                                {no_child !== "0" && <div>{displayChildTicket()}<br/></div>}
                                {no_concession !== "0" && <div>{displayConcessionTicket()}<br/></div>}
                                ------ Total ------ <br/>
                                ------- £{tickets.price} -------
                            </h5>
                            <br/>
                            <div className="paypal-button-container">
                                <PayPalCheckoutButton product={tickets}/>
                            </div>
                        </div>
                    }
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Container>
        </div >
    )
}



export default Bookings;
