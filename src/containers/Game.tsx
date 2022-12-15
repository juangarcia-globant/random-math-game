import { useEffect, useState } from 'react';
// Components
import { Beginning } from '../components/Beginning';
import { Timmer } from '../components/Timmer';
import { Quiz } from '../components/Quiz';
import Done from '../components/Done';
// Custom hooks
import { useCountdown } from '../hooks/useCountDown';

const GAME_MESSAGES = {
  won: 'You Win.',
  wrongAnswer: 'Game Over you Lost.',
  timeExpired: 'Game Over Your time has expired.',
};

export const Game = ({ onRetry }) => {
  const [finishedMessage, setFinishedMessage] = useState('');
  const [beginningDone, setBeginningDone] = useState(false);
  const [questions, setQuestions] = useState({
    totalQuestions: 5,
    curQuestion: 0,
  });
  const [finished, setFinished] = useState(false);

  const TIME_TO_START = 15;
  const TIME_TO_FINISH = TIME_TO_START + 30; 

  const timerCountDown = useCountdown(TIME_TO_FINISH);

  const handleResetClick = () => {
    setBeginningDone(false);
    setFinished(false);
    onRetry();
  };

  const handleWrongAnswer = (typeMessage: string) => finishGameMessage(typeMessage);

  const finishGameMessage = (typeMessage: string) => {
    setFinishedMessage(GAME_MESSAGES[typeMessage]);
    setFinished(true);
  }

  useEffect(() => {
    if (timerCountDown === 0) {
      finishGameMessage('timeExpired');
    };
  }, [questions.curQuestion, timerCountDown]);

  useEffect(() => {
    if (questions.curQuestion === questions.totalQuestions) {
      finishGameMessage('won');
    };
  }, [questions.curQuestion, questions.totalQuestions]);

  return (
    <>
    {finished
      ? (
        <Done message={finishedMessage} onClick={handleResetClick} />
      )
      : (
        <div>
        {
          !beginningDone
            ? (
              <Beginning time={TIME_TO_START} setBeginningDone={setBeginningDone} />
            )
            : (
              <>
                <Timmer seconds={timerCountDown} />
                <Quiz questions={questions} setQuestions={setQuestions} wrongAnswer={handleWrongAnswer} />
              </>
            )
        }
        </div>
      )
    }
    </>
  );
}
