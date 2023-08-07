import heartIcon from "../../assets/images/HeartTimer.png";
import { useState, useEffect } from "react";

const CountDownTimer = () => {
  const targetDate = new Date("2023-10-18 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (timeLeft <= 0) {
        // Countdown has ended, do something here (e.g., display a message)
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    return Math.max(targetDate - now, 0);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="countdown flex items-center justify-center">
      <div
        id="timer"
        className="flex items-center justify-center text-xl space-x-1"
      >
        <div className="flex items-center">
          <img src={heartIcon} alt="Heart Icon" className="w-8 h-8 mx-1" />
          <span className="days">{formatTime(days)}</span>
        </div>
        <div className="flex items-center">
          <img src={heartIcon} alt="Heart Icon" className="w-8 h-8 mx-1" />
          <span className="hours">{formatTime(hours)}</span>
        </div>
        <div className="flex items-center">
          <img src={heartIcon} alt="Heart Icon" className="w-8 h-8 mx-1" />
          <span className="minutes">{formatTime(minutes)}</span>
        </div>
        <div className="flex items-center">
          <img src={heartIcon} alt="Heart Icon" className="w-8 h-8 mx-1" />
          <span className="seconds">{formatTime(seconds)}</span>
        </div>
      </div>
      <div class="relative w-50 h-50">
        <img src={heartIcon} class="object-cover w-full h-full" />
        <div class="absolute py-0 bottom-10 inset-x-0 text-white text-xl text-center">
          {formatTime(seconds)}
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
