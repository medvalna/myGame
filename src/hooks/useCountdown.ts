import { useEffect, useState } from "react";

/**
 *
 * @param initialTime initial count down timer in ms
 * @param callback executed function when time === 0
 */
export const useCountdown = (initialTime: number, callback: () => void) => {
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime((prev) => prev - 1000);
        }
      }, 1000);
      if (time === 0) callback();
      return () => clearInterval(interval);
    }
  }, [time, startTimer]);

  return { time: time / 1000, setStartTimer, startTimer };
};
