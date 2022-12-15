import { useState } from 'react';
// Components
import { Input } from '../components/Input';
import { Button } from '../components/Button';
// Context
import { usePlayerContext } from '../context/PlayerContext';

type StartProps = {
  onClick: () => void,
};

export const Start: React.FunctionComponent<StartProps> = ({
  onClick,
}) => {
  const [error, setError] = useState({
    message: '',
    hasError: false,
  });

  const { username, setUsername } = usePlayerContext();

  const setNameOfPlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (error.hasError && value) {
      setError({ message: '', hasError: false });
    }
    setUsername(value)
  }

  const handleOnKeyDown = (evt) => {
    if (evt.key === 'Enter'){
      handleOnClick();
    }
  }

  const handleOnClick = () => {
    if (!username) {
      setError({
        message: 'Please insert a username.',
        hasError: true,
      });
      return;
    };
    onClick();
  }

  return (
    <>
      <p>
        Insert your username <i className="fas fa-graduation-cap" />
      </p>
      <Input
        type="text"
        onKeyDown={handleOnKeyDown}
        onInputChange={setNameOfPlayer}
        error={error.message}
        hasError={error.hasError}
      />
      <p> Then press to start the game </p>
      <Button text="Start" onClick={handleOnClick} />
    </>
  )
}
