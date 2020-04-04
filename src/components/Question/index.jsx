import React, { useState, useEffect } from 'react';
import { AnswerItem, AnswersWrapper } from './style';

const Question = ({ question, answers, nextStep }) => {

  const [answersStatus, setAnswersStatus] = useState([]);
  // Reset this after each change of question


  useEffect(() => {
    const editAnswerStatus = answers.map(answer => ({
      click: false,
      answer: answer.answer === question.answer
    }));
    setAnswersStatus(editAnswerStatus);
  }, []);

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
    
    if (status.answer) {
      setTimeout(() => {
        nextStep()
      }, 1000);
    } 
  }

  return (
  <>
    <h1>{question.question}</h1>
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