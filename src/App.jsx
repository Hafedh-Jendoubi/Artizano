import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Review from './components/Review';
import Notification from './components/Notification';
import GetRDV from './components/GetRDV';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} /> {/* Here to add the Home page! */}
        <Route path='/GetRDV' element={<GetRDV />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App
