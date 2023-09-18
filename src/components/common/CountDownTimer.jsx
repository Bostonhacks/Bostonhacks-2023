import heartIcon from '../../assets/images/HeartTimer.png';
import { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const targetDate = new Date('2023-10-18 00:00:00').getTime();
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
    <div className="flex justify-center space-x-5 mt-10 mb-10">
      <div className="z-50">
        <div className="relative w-15 h-15 md:w-20 md:h-20">
          <img src={heartIcon} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xs text-center md:text-base">
              {formatTime(days)}
            </div>
          </div>
        </div>
        <p className="text-center text-xs md:text-base font-misterpixel font-bold">
          DAYS
        </p>
      </div>

      <div className="z-50">
        <div className="relative w-15 h-15 md:w-20 md:h-20">
          <img src={heartIcon} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xs text-center md:text-base">
              {formatTime(hours)}
            </div>
          </div>
        </div>
        <p className="text-center text-xs md:text-base font-misterpixel font-bold">
          HOURS
        </p>
      </div>

      <div className="z-50">
        <div className="relative w-15 h-15 md:w-20 md:h-20">
          <img src={heartIcon} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xs text-center md:text-base">
              {formatTime(minutes)}
            </div>
          </div>
        </div>
        <p className="text-center text-xs md:text-base font-misterpixel font-bold">
          MINUTES
        </p>
      </div>

      <div className="z-50">
        <div className="relative w-15 h-15 md:w-20 md:h-20">
          <img src={heartIcon} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xs text-center md:text-base">
              {formatTime(seconds)}
            </div>
          </div>
        </div>
        <p className="text-center text-xs md:text-base font-misterpixel font-bold">
          SECONDS
        </p>
      </div>
    </div>
  );
};

export default CountDownTimer;
