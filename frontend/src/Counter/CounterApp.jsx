import React, { useState, useEffect } from 'react';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

  // This will only run on initial page render
  useEffect(() => {
    alert('You just loaded the page!');
    console.log(counter1, 'I do not have a dependency!');
  }, []);

  // This will run if the value of counter1 has changed
  useEffect(() => {
    console.log(counter1, 'I have a dependency!')
  }, [counter1]);

  // Create more useEffects!

  return (
    <div>
      <h3>Counter 1</h3>
      COUNT: {counter1}
      <button name="counter1++" onClick={setCounter1(prevState => prevState += 1)}>+1</button>
      <button name="counter1--" onClick={(setCounter1(prevState => prevState -= 1))}>-1</button>
      {/* More buttons if you want :) */}
      <h3>Counter 2</h3>
      COUNT: {counter2}
      <button>+1</button>
      <button>-1</button>
      <h3>Counter 3</h3>
      COUNT: {counter3}
      <button>+1</button>
      <button>-1</button>
      <h3>Counter 4</h3>
      COUNT: {counter4}
      <button>+1</button>
      <button>-1</button>
      <h3>Counter 5</h3>
      COUNT: {counter5}
      <button>+1</button>
      <button>-1</button>
    </div>
  )
}

export default App;