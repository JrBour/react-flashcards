import React, { useState } from 'react';
import Quiz from 'components/Quiz';
import { QuizButton } from './style'

const Lessons = ({ cards, cardsNotHide }) => {
  const [displayQuiz, setDisplayQuiz] = useState(false);
  return (
    <>
      <QuizButton onClick={() => setDisplayQuiz(true)}>Launch quiz</QuizButton>
      {displayQuiz && <Quiz cards={cards} cardsNotHide={cardsNotHide} closeModal={() => setDisplayQuiz(false)}/>}
    </>
  );
}

export default Lessons;