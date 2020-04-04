import React, { useState, useEffect } from 'react';
import Lesson from 'components/Lesson';
import Question from 'components/Question';
import { shuffle } from 'utils/tools';
import { QuizBackground, QuizWrapper } from './style';

const status = ['lesson', 'question'];

const Quiz = ({ closeModal, cards }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [cardsSeen, setCardsSeen] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentCard, setCurrentCard] = useState(null);
  const [answers, setAnswers] = useState([])
  const [stepStatus, setStepStatus] = useState('lesson');

  const handleStep = () => {
    if (currentStep === (cards.length * 2)) {
      closeModal()
    }

    setCurrentStep(currentStep + 1);

    if (cardsSeen.length === 0) {
      const shuffleArray = shuffle([...cards.filter(card => !cardsSeen.includes(card))]);
      setCurrentCard(shuffleArray[0]);
      setCardsSeen([...cardsSeen, shuffleArray[0]]);
    } else {

      if (cardsSeen.length !== cards.length && answeredQuestions.length !== cards.length) {
        const newStatus = status[Math.floor(Math.random() * status.length)];

        if (newStatus === 'lesson') {
          const shuffleArray = shuffle([...cards.filter(card => !cardsSeen.includes(card))]);
          setCurrentCard(shuffleArray[0]);
          setCardsSeen([...cardsSeen, shuffleArray[0]]);
        } else {
          const shuffleArray = shuffle([...cards.filter(card => !answeredQuestions.includes(card) && cardsSeen.includes(card))]);
          
          setCurrentCard(shuffleArray[0]);
          setAnsweredQuestions([...answeredQuestions, shuffleArray[0]]);
          
          const shuffleAnwers = shuffle([...cards]);
          const otherAnswers = shuffleAnwers.filter(card => card.question !== currentCard.question)
          const answersToDisplay = otherAnswers.filter((card, index) => index < 2);
  
          setAnswers(shuffle([...answersToDisplay, currentCard]))
        }
        setStepStatus(newStatus);
      } else {
        if (cardsSeen.length === cards.length) {
          const shuffleArray = shuffle([...cards.filter(card => !answeredQuestions.includes(card) && cardsSeen.includes(card))]);
          
          setCurrentCard(shuffleArray[0]);
          setAnsweredQuestions([...answeredQuestions, shuffleArray[0]]);
          
          const shuffleAnwers = shuffle([...cards]);
          const otherAnswers = shuffleAnwers.filter(card => card.question !== currentCard.question)
          const answersToDisplay = otherAnswers.filter((card, index) => index < 2);
  
          setAnswers(shuffle([...answersToDisplay, currentCard]))
          setStepStatus('question');
        } else {
          const shuffleArray = shuffle([...cards.filter(card => !cardsSeen.includes(card))]);
          setCurrentCard(shuffleArray[0]);
          setCardsSeen([...cardsSeen, shuffleArray[0]]);
          setStepStatus('question');
        }
      }

    }
  }

  useEffect(() => {
    handleStep()
  }, []);

  return (
    <QuizBackground>
      <QuizWrapper>
        {currentCard ? 
          stepStatus === 'lesson' ? 
          <Lesson card={currentCard} nextStep={() => handleStep()}/> : 
          <Question question={currentCard} answers={answers} nextStep={() => handleStep()}/> 
        : null}
        <button onClick={() => closeModal()}>x</button>
      </QuizWrapper>
    </QuizBackground>
  );
}

export default Quiz;