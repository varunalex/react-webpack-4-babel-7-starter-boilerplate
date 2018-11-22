import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <p>
        Hello! <br />
        This boilerplate is working!
      </p>
      <p>- Varuna</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));