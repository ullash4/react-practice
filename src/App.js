import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App"> 
    </div>
  );
};


export default App;



/* Example of state


function App() {
  return (
    <div className="App"> 
      <Counter></Counter>
    </div>
  );
};

function Counter() {
  const [counter, setCount] = useState(0);
  const increaseCount = () => setCount(counter + 1);
  const decreaseCount = () => setCount(counter - 1);
  return(
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
*/