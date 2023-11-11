import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs/AboutUs.js'
import DataDashboard from './pages/DataDashboard'
import Sponsors from './pages/Sponsors'
import StemWithUs from './pages/StemWithUs';
import RoverSimulation from './pages/RoverSimulation'
import { useTranslation } from 'react-i18next'

function App() {
  const {t} = useTranslation();
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About-Us' element={<AboutUs />}/>
          <Route path='/Data-Dashboard' element={<DataDashboard />}/>
          <Route path='/Sponsors' element={<Sponsors />}/>
          <Route path='/Stem-With-Us' element={<StemWithUs t={t}/>}/>
          <Route path='/Rover-Simulation' element={<RoverSimulation />}/>
        </Routes>
    </div>
  );
}

export default App;
