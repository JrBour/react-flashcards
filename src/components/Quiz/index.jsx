import React, { useState, useEffect } from 'react';
import Lesson from 'components/Lesson';
import Question from 'components/Question';
import { shuffle } from 'utils/tools';
import { 
  QuizBackground, 
  QuizWrapper,
  CloseButton,
  ProgressBarWrapper,
  ProgressBar,
  QuizHeader 
} from './style';

const status = ['lesson', 'question'];

const Quiz = ({ closeModal, cards }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [cardsSeen, setCardsSeen] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentCard, setCurrentCard] = useState(null);
  const [answers, setAnswers] = useState([])
  const [stepStatus, setStepStatus] = useState('lesson');


  const wrongAnswer = ({ question }) => {
    if (answeredQuestions.some(answer => answer.question === question)) {
      setAnsweredQuestions(answeredQuestions.filter(answer => answer.question !== question))
      setCardsSeen(cardsSeen.filter(card => card.question !== question))
      setCurrentStep(currentStep - 2)
    }
  }

  const handleStep = () => {
    if (currentStep === (cards.length * 2)) {
      closeModal()
      return;
    }

    setCurrentStep(currentStep + 1);
    setCurrentCard();

    if (cardsSeen.length === 0) {
      const shuffleArray = shuffle([...cards.filter(card => !cardsSeen.includes(card))]);
      setCurrentCard(shuffleArray[0]);
      setStepStatus('lesson')
      setCardsSeen([...cardsSeen, shuffleArray[0]]);
    } else {

      if (cardsSeen.length !== cards.length && answeredQuestions.length !== cards.length) {
        const newStatus = 
        (cardsSeen.length === answeredQuestions.length) ? 
          'lesson' 
          : status[Math.floor(Math.random() * status.length)];

        if (newStatus === 'lesson') {
          const shuffleArray = shuffle([...cards.filter(card => !cardsSeen.includes(card))]);
          setCurrentCard(shuffleArray[0]);
          setCardsSeen([...cardsSeen, shuffleArray[0]]);
        } else {
          const shuffleArray = shuffle([...cards.filter(card => !answeredQuestions.includes(card) && cardsSeen.includes(card))]);
          
          setCurrentCard(shuffleArray[0]);
          setAnsweredQuestions([...answeredQuestions, shuffleArray[0]]);
          const otherAnswers = shuffle([...cards.filter(card => card.question !== shuffleArray[0].question)]);
          const answersToDisplay = otherAnswers.filter((card, index) => index < 2);
                    
          setAnswers(shuffle([...answersToDisplay, shuffleArray[0]]))
        }
        setStepStatus(newStatus);
      } else {
        if (cardsSeen.length === cards.length) {
          const shuffleArray = shuffle([...cards.filter(card => !answeredQuestions.includes(card) && cardsSeen.includes(card))]);

          setCurrentCard(shuffleArray[0]);
          setAnsweredQuestions([...answeredQuestions, shuffleArray[0]]);
          
          const otherAnswers = shuffle([...cards.filter(card => card.question !== shuffleArray[0].question)]);
          const answersToDisplay = otherAnswers.filter((card, index) => index < 2);

          setAnswers(shuffle([...answersToDisplay, shuffleArray[0]]))
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
        <QuizHeader>
          <CloseButton onClick={() => closeModal()}>x</CloseButton>
          <ProgressBarWrapper>
            <ProgressBar width={currentStep / (cards.length * 2) * 100}></ProgressBar>
          </ProgressBarWrapper>
        </QuizHeader>
        {currentCard ? 
          stepStatus === 'lesson' ? 
          <Lesson card={currentCard} nextStep={() => handleStep()}/> : 
          <Question question={currentCard} answers={answers} wrongAnswer={wrongAnswer} nextStep={() => handleStep()}/> 
        : null}
      </QuizWrapper>
    </QuizBackground>
  );
}

export default Quiz;