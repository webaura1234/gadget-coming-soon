import React, { useState, useEffect } from 'react';
import '../ComingSoon.css'; // Make sure to create this CSS file

// Set your desired launch date and time here (e.g., Nov 30, 2025 00:00:00)
const HeroPage = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsLaunched(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cf-coming-soon-container">
      {/* <div className="cf-header">
        <h1 className="cf-logo">CASEFORGE</h1>
      </div> */}

      <div className="cf-content-box">
        {isLaunched ? (
          <h1 className="cf-main-headline launched">
            WE ARE LIVE!
          </h1>
        ) : (
          <>
            <h1 className="cf-main-headline">
              <span className="cf-red-text">COMING SOON </span>
            </h1>
            <p className="cf-sub-text">
               We’re thrilled to announce that GADGET 360 is officially launching nationwide!
              Now, our expertly curated collection of premium phone cases and accessories will be available at every doorstep across India.
              But we’re not just launching a store — we’re building a community for mobile enthusiasts.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroPage;
