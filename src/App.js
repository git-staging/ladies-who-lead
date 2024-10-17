import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';
import eventData from './data/UpcomingEvents.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleEvents from './pages/SingleEvents';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<UpcomingEvents UpcomingEvents={eventData} />} path='/upcoming-events' />
        <Route path="/event/:id" element={<SingleEvents events={eventData} />} />
      </Routes>
    </>
  );
}

export default App;
