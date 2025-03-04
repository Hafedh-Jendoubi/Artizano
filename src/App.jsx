import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Review from './components/Review';
import Notification from './components/Notification';
import GetRDV from './components/GetRDV';
import ExchangeService from './components/exChangeService';
import Footer from './components/footer';
import WorkshopDetails from './components/WokshopDetails';
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
     
      <Routes>
        <Route path='/' element={<h1>Home</h1>} /> 
        <Route path='/GetRDV' element={<GetRDV />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/exchange-service" element={<ExchangeService />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App
