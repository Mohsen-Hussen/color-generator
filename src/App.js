import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  return (
    <div className="App">
      App component
    </div>
  );
}

export default App;