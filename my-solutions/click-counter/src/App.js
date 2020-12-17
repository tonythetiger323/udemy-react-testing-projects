import React, { useState } from 'react';
import './App.css';

function App() {
  // set component state count and error
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        Count&nbsp;
        <span data-test="count">{count}</span>
        </h1>
      <button 
      data-test="more-button"
      onClick={() => {
        if(error) {
        setError(false);
      }
      setCount(count + 1);
      }
    }
      >Clicky Me for More!
      </button>
      <button
        data-test="less-button"
        onClick={() => {
          if(count > 0) {
            setCount(count - 1)
          } else {
            setError(true);
          }
        }}
      >
        Clicky Me for Less!
      </button>
    <div data-test="error" className={error ? "message" : "hidden"}>
      Sorry! 0 is as low as you can go!
    </div>
    </div>
  );
}

export default App;
