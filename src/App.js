import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpeningTimes from './OpeningTimes';
import Classifications from './Classifications';
import Bookings from './Bookings';
import AboutUs from './AboutUs';
import Buffer from './Buffer'
import Directions from './Directions'
import ContactUs from './ContactUs'
import PlacesToGo from './PlacesToGo'
import DiscussionBoard from './DiscussionBoard'


const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/openingTimes" element={<OpeningTimes />} />
                <Route path="/Classifications" element={<Classifications/>} />
                <Route path="/Bookings" element={<Bookings/>}/>
                <Route path="/classifications" element={<Classifications/>} />
                <Route path="/aboutUs" element={<AboutUs/>} />
                <Route path="/directions" element={<Directions/>} />
                <Route path="/contactUs" element={<ContactUs/>} />
                <Route path="/placesToGo" element={<PlacesToGo/>} />
                <Route path="/discussionBoard" element={<DiscussionBoard/>} />
            </Routes>
            <Buffer />
            <Footer />
        </Router>
    );
}

export default App;