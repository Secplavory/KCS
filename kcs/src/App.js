import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import React from "react";

import './App.scss';
import KCSNavbar from './components/KCSNavbar'
import KCSFooter from './components/KCSFooter'
import BloodPressurePage from './components/bloodPressurePage/BloodPressurePage'
import RecordDietPage from './components/recordDietPage/RecordDietPage'
import Search from './components/searchPage/SearchPage'
import PersonalInformationPage from './components/personalInformationPage/PersonalInformationPage'

function App() {

  return (
    <div className="App">
      <Router>
        <KCSNavbar id="Navbar" />
        <Routes>
          <Route path="/" element={<Navigate replace to="/PersonalInformation" />} />
          <Route path="/BloodPressure" element={ <BloodPressurePage /> }/>
          <Route path="/RecordDiet" element={ <RecordDietPage /> }/>
          <Route path="/Search" element={ <Search /> }/>
          <Route path="/PersonalInformation" element={ <PersonalInformationPage /> } />
        </Routes>
        <KCSFooter id="Footer" />
      </Router>
    </div>
  );
}

export default App;
