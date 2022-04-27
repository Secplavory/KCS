import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React from "react";
import { useState } from "react";
import './App.scss';
import KCSNavbar from './components/KCSNavbar/KCSNavbar.jsx'
import KCSFooter from './components/KCSFooter/KCSFooter.jsx'
import SignInUpPage from './views/signInUpPage/SignInUpPage.jsx'
import BloodPressurePage from './views/bloodPressurePage/BloodPressurePage.jsx'
import BloodSugarPage from './views/bloodSugarPage/BloodSugarPage.jsx'
import RecordDietPage from './views/recordDietPage/RecordDietPage.jsx'
import Search from './views/searchPage/SearchPage.jsx'
import PersonalInformationPage from './views/personalInformationPage/PersonalInformationPage.jsx'

function App() {
  const [userHash, setUserHash] = useState("");
  const loginSetUserHash = (userHashCode) =>{
    setUserHash(userHashCode);
  }
  return (
    <div className="App">
      <Router>
        <KCSNavbar id="Navbar" />
        <Routes>
            <Route path="/" element={<Navigate replace to="/SignInUp" />} />
            <Route path="/SignInUp" element={ <SignInUpPage setUserHash={ loginSetUserHash } /> } />
            <Route path="/BloodPressure" element={ <BloodPressurePage /> }/>
            <Route path="/BloodSugar" element={ <BloodSugarPage /> }/>
            <Route path="/RecordDiet" element={ <RecordDietPage /> }/>
            <Route path="/Search" element={ <Search /> }/>
            <Route path="/PersonalInformation" element={ <PersonalInformationPage userHash={ userHash } /> } />
        </Routes>
      </Router>
        <KCSFooter id="Footer" />
    </div>
  );
}

export default App;
