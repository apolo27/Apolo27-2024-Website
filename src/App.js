import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home/index.js';
import AboutUs from './pages/AboutUs/AboutUs.js'
import DataDashboard from './pages/DataDashboard'
import Sponsors from './pages/Sponsors'
import StemWithUs from './pages/StemWithUs';
import RoverSimulation from './pages/Simulation/index.js'
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound/index.js';
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'

function App() {
  const {t} = useTranslation();

  return (
    <div>
      <Header t={t}/>
      <Routes>
        {<Route path='/' element={<Home t={t}/>}/>}
        <Route path='/About-Us' element={<AboutUs t={t}/>}/>
        <Route path='/Data-Dashboard' element={<DataDashboard t={t}/>}/>
        <Route path='/Sponsors' element={<Sponsors t={t}/>}/>
        <Route path='/Stem-With-Us' element={<StemWithUs t={t}/>}/>
        <Route path='/Simulation' element={<RoverSimulation t={t}/>}/>

        <Route path='/Contact-Us' element={<ContactUs t={t}/>}/>
        <Route path='/*' element={<PageNotFound t={t}/>}/>
      </Routes>
      <Footer t={t}/>
    </div>
  );
}

export default App;
