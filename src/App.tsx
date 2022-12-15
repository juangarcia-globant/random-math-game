import { useState } from 'react';
// Pages
import { Start } from './containers/Start';
import { Game } from './containers/Game';
// Context
import { PlayerProvider } from './context/PlayerContext';

import './App.css';

export const App = () => {
  const [start, setStart] = useState<boolean>(false);

  const handleOnStartClick = () => setStart(!start);

  return (
    <PlayerProvider>
      <div className='app-container'>
        {
          start ? <Game onRetry={handleOnStartClick} /> : <Start onClick={handleOnStartClick} />
        }
      </div>
    </PlayerProvider>
  );
}
