import { useEffect, useState } from 'react';
// Components
import Input from '../Input';
// Utils
import { generateProblem, compare } from '../../utils/math';

import './Quiz.css';

type QuestionsProps = {
  curQuestion: number,
  totalQuestions: number,
};

type QuizProps = {
  wrongAnswer: (value:string) => void,
  questions: QuestionsProps,
  setQuestions: (value: QuestionsProps) => void,
};

export const Quiz: React.FunctionComponent<QuizProps> = ({
  wrongAnswer,
  questions,
  setQuestions,
}) => {
  const { curQuestion, totalQuestions } = questions;

  const [problem, setProblem] = useState('');

  useEffect(() => {
    setProblem(generateProblem());
  }, []);
  
  const emptyAnswerInput = () => {
    const inputEl = (document.getElementById('textId') as HTMLInputElement);
    inputEl.value =  '';
  }

  const evaluateProblem = (answer: number) => {
    if (compare(problem, answer)) {
      setProblem(generateProblem());
      setQuestions({
        ...questions,
        curQuestion: curQuestion + 1,
      });
      emptyAnswerInput();
      return;
    }
    wrongAnswer('wrongAnswer');
  };

  const handleOnKeyUp = (evt) => {
    const answer = evt.target.value;
    if (evt.key === "Enter") {
      evaluateProblem(Number(answer.match(/((-?)\d+)/g)));
    }
  }

  return (
    <>
      <h1 className="title"> {problem} </h1>
      <Input
        type="number"
        placeholder="Answer"
        onKeyDown={handleOnKeyUp}
        onInputChange={() => {}}
      />
      <p> Question: {curQuestion + 1} of {totalQuestions} </p>
    </>
  );
}

export default Quiz;
