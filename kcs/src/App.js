import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.scss';
import KCSNavbar from './components/KCSNavbar'
import KCSFooter from './components/KCSFooter'
import PersonalInformationPage from './components/personalInformationPage/PersonalInformationPage'

function App() {
  return (
    <div className="App">
      <KCSNavbar id="Navbar" />
      <PersonalInformationPage />
      <KCSFooter id="Footer" />
    </div>
  );
}

export default App;
