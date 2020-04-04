import React from 'react';
import Card from 'components/Card';

const Lesson = ({ card, nextStep }) => {
  return (
    <>
      <Card card={card} />
      <button onClick={nextStep}>Continue</button>
    </>
  )
}

export default Lesson;



/*

Au moins deux cours doivent etre vu au debut si plus de deux cartes ont etes selectionnes
Une ou deux questions en rapport avec un de ces cours doit etre pose ensuite

*/