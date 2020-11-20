import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import First from './components/HW-3.1/First'
import Second from './components/HW-3.2/Second'
import Third from './components/HW-3.3/Third'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="task">
          <Route path="/first" component={ First } />
          <Route path="/second" component={ Second } />
          <Route path="/third" component={ Third } />
        </div>
      </div>
    </Router>
  );
}

export default App;
