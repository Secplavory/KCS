import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React from "react";
import { useState } from "react";
import './App.scss';
import KCSNavbar from './components/KCSNavbar/KCSNavbar.jsx'
import KCSFooter from './components/KCSFooter/KCSFooter.jsx'
import LoadingScreen from './components/loadingScreen/LoadingScreen.jsx'
import SignInUpPage from './views/signInUpPage/SignInUpPage.jsx'
import BloodPressurePage from './views/bloodPressurePage/BloodPressurePage.jsx'
import BloodSugarPage from './views/bloodSugarPage/BloodSugarPage.jsx'
import RecordDietPage from './views/recordDietPage/RecordDietPage.jsx'
import Search from './views/searchPage/SearchPage.jsx'
import PersonalInformationPage from './views/personalInformationPage/PersonalInformationPage.jsx'

function App() {
  const getUserId = () => {
    const GlobalUserId = window.localStorage.getItem('userId');
    return GlobalUserId;
  }
  const [userId, setUserId] = useState(getUserId());
  const [isShowing, setIsShowing] = useState(true);
  console.log(isShowing)
  const loginSetUserId = (userHashId) => {
    window.localStorage.setItem('userId', userHashId)
    setUserId(userHashId);
  }
  const loadingSetIsShowing = (isShowing) => {
    setIsShowing(isShowing);
  }
  return (
    <div className="App">
      <Router>
        <KCSNavbar id="Navbar" />
        <LoadingScreen isShowing={isShowing} setIsShowing={loadingSetIsShowing} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/SignInUp" />} />
          <Route path="/SignInUp" element={<SignInUpPage setUserId={loginSetUserId} setIsShowing={loadingSetIsShowing} />} />
          <Route path="/BloodPressure" element={<BloodPressurePage userId={userId} setIsShowing={loadingSetIsShowing} />} />
          <Route path="/BloodSugar" element={<BloodSugarPage userId={userId} setIsShowing={loadingSetIsShowing} />} />
          <Route path="/RecordDiet" element={<RecordDietPage userId={userId} setIsShowing={loadingSetIsShowing} />} />
          <Route path="/Search" element={<Search setIsShowing={loadingSetIsShowing} />} />
          <Route path="/PersonalInformation" element={<PersonalInformationPage userId={userId} setIsShowing={loadingSetIsShowing} />} />
        </Routes>
        <KCSFooter id="Footer" />
      </Router>
    </div>
  );
}

export default App;
