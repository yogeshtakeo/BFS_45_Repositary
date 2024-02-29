import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';

function PhoneWallpaper() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1 className="header animate__animated animate__fadeIn">Mphone: The Ultimate Virtual Phone</h1>
      <div className="phone">
        <div className="wallpaper">
          {/* Add different pictures for wallpaper */}
          <img src="/wall.jpg" alt="Wallpaper" />

          <div className="time-widget">
            {/* Display current time */}
            <div className="time">{formatTime(currentTime)}</div>
          </div>

          <div className="notifications">
            {/* Add notifications or other widgets */}
            <div className="notification">New Message</div>
            <div className="notification">App Update Available</div>
          </div>
        </div>
      </div>

      <div className="feature-description animate__animated animate__zoomIn">
        <p>Introducing the Mphone, equipped with the revolutionary HoloVision display that brings holographic images to life. Experience a new dimension of communication and entertainment.</p>
      </div>

      <div className="buy-button-container">
        <button className="buy-button animate__animated animate__fadeIn">Buy Now</button>
      </div>
    </div>
  );
}

function formatTime(time) {
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  return new Intl.DateTimeFormat('en-US', options).format(time);
}

export default PhoneWallpaper;
