import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function get(){
    fetch('/key/')
    .then(function(response) {
      return response.text()
    }).then(function(body) {
      console.log('body', body);
      // document.body.innerHTML = body
    }).catch((err:Error)=>{
      console.error('err', err);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div className="btn" onClick={get}>
          获取
        </div>

      </header>
    </div>
  );
}

export default App;
