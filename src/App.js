import React, { useState, useEffect } from 'react';
import './App.css';
import canadaBg from './canada-bg.jpg'; // Import the Canadian-themed background image

function App() {
  const targetDate = new Date('2024-02-16');
  const [remainingDays, setRemainingDays] = useState(calculateDays());

  function calculateDays() {
    const today = new Date();
    const differenceInTime = targetDate.getTime() - today.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays >= 0 ? differenceInDays : 0;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingDays(calculateDays());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${canadaBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
  };

  const countdownStyle = {
    fontSize: '5rem',
  };

  return (
    <div className="App" style={bgStyle}>
      <header className="App-header">
        <h1 style={headingStyle}>🤍🤍🤍</h1>
        <p style={countdownStyle}>
          {remainingDays === 0 ? 'Today is the day!' : `Only ${remainingDays} day(s) left!`}
        </p>
        <h1 style={headingStyle}>🤍🤍🤍</h1>
      </header>
    </div>
  );
}

export default App;
