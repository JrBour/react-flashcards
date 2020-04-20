import React, { useState, useEffect } from 'react';
import { AnswerItem, AnswersWrapper, QuestionTitle } from './style';

const Question = ({ question, answers, nextStep, wrongAnswer }) => {

  const [answersStatus, setAnswersStatus] = useState([]);

  useEffect(() => {
    const editAnswerStatus = answers.map(answer => ({
      click: false,
      answer: answer.answer === question.answer
    }));
    setAnswersStatus(editAnswerStatus);
  }, [question]);

  const checkAnswer = (status, index) => {
    const editAnswersStatus = answers.map((answer, answerIndex) => {
      if (answerIndex === index) {

        return ({
          click: true,
          answer: answer.answer === question.answer
        })
      } else {
        return answersStatus[answerIndex];
      }
    });

    setAnswersStatus(editAnswersStatus);
    
    if (editAnswersStatus[index].answer) {
      setTimeout(() => {
        nextStep()
      }, 1000);
    } else if (!editAnswersStatus[index].answer) {
      wrongAnswer(question)
    }
  }

  return (
  <>
    <QuestionTitle>{question.question}</QuestionTitle>
    {answersStatus.length > 0 && (
      <AnswersWrapper>{answers.map(({ answer }, index) => (
        <AnswerItem 
          key={index}
          onClick={() => checkAnswer(answersStatus[index], index)}
          correct={answersStatus[index].click && answersStatus[index].answer}
          wrong={answersStatus[index].click && !answersStatus[index].answer}
        >
          {answer}
        </AnswerItem>
      ))}</AnswersWrapper>
    )}
    </>
)}

export default Question;