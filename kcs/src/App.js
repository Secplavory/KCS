import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import React from "react";

import './App.scss';
import KCSNavbar from './components/KCSNavbar'
import KCSFooter from './components/KCSFooter'
import PersonalInformationPage from './components/personalInformationPage/PersonalInformationPage'
import RecordDietPage from './components/recordDietPage/RecordDietPage'

function App() {

  return (
    <div className="App">
      <Router>
        <KCSNavbar id="Navbar" />
        <Routes>
          <Route path="/" element={<Navigate replace to="/PersonalInformation" />} />
          <Route path="/PersonalInformation" element={ <PersonalInformationPage /> } />
          <Route path="/RecordDiet" element={ <RecordDietPage /> }/>
        </Routes>
        <KCSFooter id="Footer" />
      </Router>
    </div>
  );
}

export default App;
