import React from 'react'
import { Table } from 'react-bootstrap';
import './App.css';
import './index.css';


const OpeningTimes = () =>
    <div >
        <h1>OPENING TIMES</h1>
        <Table striped bordered hover variant="dark">
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
    </div>;

export default OpeningTimes;
