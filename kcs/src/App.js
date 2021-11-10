import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.scss';
import KCSNavbar from './components/KCSNavbar'
import KCSFooter from './components/KCSFooter'

function App() {
  return (
    <div className="App">
      <KCSNavbar id="Navbar" />
      <KCSFooter id="Footer" />
    </div>
  );
}

export default App;
