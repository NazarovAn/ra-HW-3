import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import FirstHW from './components/HW-3.1/FirstHW'
import SecondHW from './components/HW-3.2/SecondHW'
import ThirdHW from './components/HW-3.3/ThirdHW'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ FirstHW } />
          <Route path="/second" component={ SecondHW } />
          <Route path="/third" component={ ThirdHW } />
        </div>
      </div>
    </Router>
  );
}

export default App;
