import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header'
import Home from './pages/Home.js'
import AboutUs from './pages/AboutUs/AboutUs.js'
import DataDashboard from './pages/DataDashboard.js'
import Sponsors from './pages/Sponsors.js'
import SocialMedia from './pages/SocialMedia.js'

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About-Us' element={<AboutUs />}/>
          <Route path='/Data-Dashboard' element={<DataDashboard />}/>
          <Route path='/Sponsors' element={<Sponsors />}/>
          <Route path='/Social-Media' element={<SocialMedia />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
