import React from 'react';
import Card from 'components/Card';
import { LessonWrapper } from './style'

const Lesson = ({ card, nextStep }) => {
  return (
    <LessonWrapper>
      <Card card={card} nextStep={nextStep} />
    </LessonWrapper>
  )
}

export default Lesson;
