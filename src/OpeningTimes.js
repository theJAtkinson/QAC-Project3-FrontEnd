import React from 'react'
import { Table, Container } from 'react-bootstrap';

const OpeningTimes = () =>
    <div>
        <Container>
        <br/>
            <h1 style={{color: "white"}}><b>OPENING TIMES</b></h1>
            <br/>
            <Table bordered hover variant="dark" style={{ "max-width": "40%" }}>
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Monday</th>
                        <th>11:00-23:00</th>

                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        <th>11:00-23:00</th>

                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <th>11:00-23:00</th>

                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <th>11:00-23:00</th>

                    </tr>
                    <tr>
                        <th>Friday</th>
                        <th>11:00-23:00</th>

                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <th>11:00-23:00</th>

                    </tr>
                    <tr>
                        <th>Sunday</th>
                        <th>11:00-23:00</th>

                    </tr>
                </tbody>
            </Table>
        </Container>
    </div>;

export default OpeningTimes;
