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
import RecommendationLook from './components/RecommandationLook';
import SponsorshipPage from './components/SponsorshipPage';
import Home  from './components/Home';
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/GetRDV' element={<GetRDV />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/exchange-service" element={<ExchangeService />} />
        <Route path="/RecommandationLook" element={<RecommendationLook />} />
        <Route path="/SponsorshipPage" element={<SponsorshipPage />} />


      </Routes>
      <Footer/>
    </Router>

  );
}

export default App
