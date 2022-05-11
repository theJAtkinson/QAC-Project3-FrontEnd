import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpeningTimes from './OpeningTimes';
import Classifications from './Classifications';
import Buffer from './Buffer'

const App = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/openingTimes" element={<OpeningTimes />} />
                <Route path="/Classifications" element={<Classifications/>} />
            </Routes>
            <Buffer />
            <Footer />
        </Router>
    );
}

export default App;