import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React from "react";
import { useState } from "react";
import './App.scss';
import KCSNavbar from './components/KCSNavbar.jsx'
import KCSFooter from './components/KCSFooter.jsx'
import SignInUpPage from './components/signInUpPage/SignInUpPage.jsx'
import BloodPressurePage from './components/bloodPressurePage/BloodPressurePage.jsx'
import BloodSugarPage from './components/bloodSugarPage/BloodSugarPage.jsx'
import RecordDietPage from './components/recordDietPage/RecordDietPage.jsx'
import Search from './components/searchPage/SearchPage.jsx'
import PersonalInformationPage from './components/personalInformationPage/PersonalInformationPage.jsx'

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
          <Route path="/"  element={<Navigate replace to="/NormalUser" />} />
          <Route path="/NormalUser"  element={<Navigate replace to="/NormalUser/SignInUp" />} />
          <Route path="/NormalUser">
            <Route index path="SignInUp" element={ <SignInUpPage setUserHash={ loginSetUserHash } /> } />
            <Route path="BloodPressure" element={ <BloodPressurePage /> }/>
            <Route path="BloodSugar" element={ <BloodSugarPage /> }/>
            <Route path="RecordDiet" element={ <RecordDietPage /> }/>
            <Route path="Search" element={ <Search /> }/>
            <Route path="PersonalInformation" element={ <PersonalInformationPage userHash={ userHash } /> } />
          </Route>
        </Routes>
        <KCSFooter id="Footer" />
      </Router>
    </div>
  );
}

export default App;
