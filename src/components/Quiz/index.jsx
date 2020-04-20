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

const Quiz = ({ closeModal, cards, cardsNotHide }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [cardsSeen, setCardsSeen] = useState([]);
  const [currentStep, setCurrentStep] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [answers, setAnswers] = useState([])
  const [stepStatus, setStepStatus] = useState('lesson');
  const [changeStep, setChangeStep] = useState(false);

  const wrongAnswer = ({ question }) => {
    if (answeredQuestions.some(answer => answer.question === question)) {
      setAnsweredQuestions(answeredQuestions.filter(answer => answer.question !== question))
      setCardsSeen(cardsSeen.filter(card => card.question !== question))
      setCurrentStep(currentStep - 2)
    }
  }

  const setQuestion = () => {
    const shuffleArray = shuffle([...cardsNotHide.filter(card => !answeredQuestions.includes(card) && cardsSeen.includes(card))]);
    setCurrentCard(shuffleArray[0]);
    setAnsweredQuestions([...answeredQuestions, shuffleArray[0]]);

    const otherAnswers = shuffle([...cards.filter(card => card.question !== shuffleArray[0].question)]);
    const answersToDisplay = otherAnswers.filter((card, index) => index < 2);
    setAnswers(shuffle([...answersToDisplay, shuffleArray[0]]))
  }

  const setLesson = () => {
    const shuffleArray = shuffle([...cardsNotHide.filter(card => !cardsSeen.includes(card))]);
    setCurrentCard(shuffleArray[0]);
    setCardsSeen([...cardsSeen, shuffleArray[0]]);
  }

  const handleStep = () => {
    if (currentStep + 1 === (cardsNotHide.length * 2)) {
      closeModal()
      return;
    }
    setCurrentStep(currentStep === null ? 0 : currentStep + 1);
    
    if (cardsSeen.length === 0) {

      setStepStatus('lesson')
      setLesson()
    } else {

      if (cardsSeen.length !== cards.length && answeredQuestions.length !== cards.length) {
        const newStatus = 
        (cardsSeen.length === answeredQuestions.length) ? 
          'lesson' 
          : status[Math.floor(Math.random() * status.length)];

        if (newStatus === 'lesson') {
          setLesson()
        } else {
          setQuestion()
        }
        setStepStatus(newStatus);
      } else {
        if (cardsSeen.length === cards.length) {
          setStepStatus('question');
          setQuestion()
        } else {
          setStepStatus('question');
          setLesson()
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
            <ProgressBar width={currentStep / (cardsNotHide.length * 2) * 100}></ProgressBar>
          </ProgressBarWrapper>
        </QuizHeader>
        {!changeStep && currentCard ? 
          stepStatus === 'lesson' ? 
          <Lesson card={currentCard} nextStep={() => {
            setChangeStep(true)
            handleStep()
            setChangeStep(false)
          }}/> : 
          <Question question={currentCard} answers={answers} wrongAnswer={wrongAnswer} nextStep={() => {
            setChangeStep(true)
            handleStep()
            setChangeStep(false)
          }}/> 
        : null}
      </QuizWrapper>
    </QuizBackground>
  );
}

export default Quiz;