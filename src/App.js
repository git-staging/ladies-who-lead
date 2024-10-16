import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<UpcomingEvents/>} path='/upcoming-events' />
      </Routes>
    </>
  );
}

export default App;
