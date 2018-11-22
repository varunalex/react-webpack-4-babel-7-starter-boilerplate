import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const App = () => {
  return (
    <div className="app">
      <p>
        Hello! <br />
        This boilerplate is working!
      </p>
      <p>- Varuna</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);