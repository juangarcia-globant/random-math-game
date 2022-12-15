import { useEffect } from 'react';
// Custom hooks
import { useCountdown } from '../../hooks/useCountDown';

import './Beginning.css';

type BeginningProps = {
  time: number,
  setBeginningDone: (value: boolean) => void,
};

export const Beginning: React.FunctionComponent<BeginningProps> = ({
  time = 3,
  setBeginningDone,
}) => {
  const seconds = useCountdown(time);

  useEffect(() => {
    if (seconds === 0) setBeginningDone(true);
  }, [seconds, setBeginningDone])

  return (
    <div>
      <h3> The game will be start in... </h3>
      <h1> { seconds } </h1>
    </div>
  );
}

export default Beginning;
