import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const weddingDate = new Date('January 31, 2026 00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(weddingDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - new Date().getTime());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <h2>Countdown to our wedding</h2>
      <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
    </div>
  );
}

export default Countdown;
