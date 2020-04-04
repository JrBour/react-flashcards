import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit } from 'store/features/cards';
import { CardWrapper, CardFront, CardBack, CardText, CardContainer } from './style';

const Card = ({ card, index, isEditable }) => {
  const dispatch = useDispatch();
  const [currentCard, setCurrentCard] = useState(card);


  const editCard = property => {
    const newCard = {
      ...card,
      [property]: !currentCard[property]
    }
    if (isEditable){
      dispatch(edit({ index, card: newCard }))
    } else {
      setCurrentCard(newCard);
    }
  }

  return (
    <CardContainer>
      <CardWrapper>
        <CardFront display={currentCard.front ? 1 : 0} onClick={() => editCard('front')}>
          <CardText>{card.question}</CardText>
        </CardFront>
        <CardBack display={!currentCard.front ? 1 : 0} onClick={() => editCard('front')}>
          <CardText>{card.answer}</CardText>
        </CardBack>
      </CardWrapper>
      {isEditable && <button onClick={() => editCard('hide')}>Hide</button>}
    </CardContainer>
  );

};

export default Card;