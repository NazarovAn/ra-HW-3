import './App.css'
import Stars from './Stars'
import Input from './Input'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="App">
      <Input onSubmit={setCount} />
      <Stars count={ count } />
    </div>
  );
}

export default App;
