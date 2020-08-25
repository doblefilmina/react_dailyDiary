import React from 'react';
import logo from '../img/boceto-06.jpg';
import screenshot from '../img/screenshot.jpg';


const Homepage = ({setScreen}) => {
  const addActivity = () => {
    return (
     setScreen('addActivity')
    );
   }

  return (
    <header className="Homepage">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="left">
            <img src={screenshot} className="screenshot" alt="screenshot"/>
          </div>
          <div className="right">
            <p>Log your daily activities in this fun to use app!</p>
            <button onClick={addActivity}>Start</button>
          </div>
        </div>
      </header>
  );
}
export default Homepage;
