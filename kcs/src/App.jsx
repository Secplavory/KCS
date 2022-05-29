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
  const [userId, setUserId] = useState("1");
  const loginSetUserId = (userHashId) =>{
    setUserId(userHashId);
  }
  return (
    <div className="App">
      <Router>
        <KCSNavbar id="Navbar" />
        <Routes>
            <Route path="/" element={<Navigate replace to="/SignInUp" />} />
            <Route path="/SignInUp" element={ <SignInUpPage setUserId={ loginSetUserId } /> } />
            <Route path="/BloodPressure" element={ <BloodPressurePage userId={ userId } /> }/>
            <Route path="/BloodSugar" element={ <BloodSugarPage userId={ userId } /> }/>
            <Route path="/RecordDiet" element={ <RecordDietPage userId={ userId } /> }/>
            <Route path="/Search" element={ <Search /> }/>
            <Route path="/PersonalInformation" element={ <PersonalInformationPage userId={ userId } /> } />
        </Routes>
        <KCSFooter id="Footer" />
      </Router>
    </div>
  );
}

export default App;
