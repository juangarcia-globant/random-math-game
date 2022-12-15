import { useEffect, useState } from 'react';

const useCountdown = (time) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return seconds;
};

export { useCountdown };
