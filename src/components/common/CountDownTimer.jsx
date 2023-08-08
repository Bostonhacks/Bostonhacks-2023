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
    <div className="countdown flex items-center justify-center space-x-5 scale-150 my-10">

      <div class="">
        <div class="relative w-50 h-auto">
          <img src={heartIcon} class="object-cover w-full h-full" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-xl text-center">{formatTime(days)}</div>
          </div>
        </div>
        <p class="text-center">Days</p>
      </div>

      <div>
        <div class="relative w-50 h-50">
          <img src={heartIcon} class="object-cover w-full h-full" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-xl text-center">
              {formatTime(hours)}
            </div>
          </div>
        </div>
        <p class="text-center">Hours</p>
      </div>

      <div>
        <div class="relative w-50 h-50">
          <img src={heartIcon} class="object-cover w-full h-full" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-xl text-center">
              {formatTime(minutes)}
            </div>
          </div>
        </div>
        <p class="text-center">Minutes</p>
      </div>

      <div>
        <div class="relative w-50 h-50">
          <img src={heartIcon} class="object-cover w-full h-full" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-xl text-center">
              {formatTime(seconds)}
            </div>
          </div>
        </div>
        <p class="text-center">Seconds</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
