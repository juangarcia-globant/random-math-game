import { useState, createContext, useContext, ReactNode } from 'react';

type PlayerProviderProps = {children: ReactNode};

const PlayerStateContext = createContext<
{username: string, setUsername: React.Dispatch<React.SetStateAction<string>>} | undefined
>(undefined);

function PlayerProvider ({ children }: PlayerProviderProps) {
  const [username, setUsername] = useState<string>('');

  return (
    <PlayerStateContext.Provider value={{ username, setUsername }}>
      { children }
    </PlayerStateContext.Provider>
  );
}

function usePlayerContext () {
  const context = useContext(PlayerStateContext);

  if (context === undefined) {
    throw new Error('usePlayerContext must be inside a PlayerProvider');
  }

  return context;
}

export { PlayerProvider, usePlayerContext };