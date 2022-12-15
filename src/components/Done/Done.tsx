// Components
import Button from "../Button";
// Context
import { usePlayerContext } from '../../context/PlayerContext';

import './Done.css';

type DoneProps = {
  message: string,
  onClick: () => void,
};

export const Done: React.FunctionComponent<DoneProps> = ({
  message = '',
  onClick,
}) => {
  const { username } = usePlayerContext();

  return (
    <div>
      <h2 className='username'> { username } </h2>
      <h1> {message} </h1>
      <Button text="Play Again" onClick={onClick} />
    </div>
  )
}

export default Done;