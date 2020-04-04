import React, { useState } from 'react';
import Quiz from 'components/Quiz';

const Lessons = ({ cards }) => {
  const [displayQuiz, setDisplayQuiz] = useState(false);
  return (
    <>
      <button onClick={() => setDisplayQuiz(true)}>Launch quiz</button>
      {displayQuiz && <Quiz cards={cards} closeModal={() => setDisplayQuiz(false)}/>}
    </>
  );
}

export default Lessons;