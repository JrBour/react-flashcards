import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { edit } from 'store/features/cards';
import { CardWrapper, CardFront, CardBack, CardText, CardContainer, ContinueButton } from './style';
import useKeyPress from 'hook/useKeyboardEvent'

const Card = ({ card, index, isEditable, nextStep }) => {
  const dispatch = useDispatch();
  const [currentCard, setCurrentCard] = useState(card);
  const [hasAlreadyFlip, setHasAlreadyFlip] = useState(false);

  useKeyPress(' ', () => editCard('front'))

  useEffect(() => {
    setCurrentCard({ ...card })
    setHasAlreadyFlip(false)
  }, [card])

  const editCard = property => {
    if (card.hide){
      return;
    }

    const newCard = {
      ...card,
      [property]: !currentCard[property]
    }

    if (isEditable){
      dispatch(edit({ index, card: newCard }))
    } else {
      setHasAlreadyFlip(true)
      setCurrentCard({...newCard});
    }
  }

  return (
    <CardContainer>
      <CardWrapper hide={card.hide ? 1 : 0}>
        <CardFront display={currentCard.front ? 1 : 0} onClick={() => editCard('front')}>
          <CardText>{currentCard.question}</CardText>
        </CardFront>
        <CardBack display={!currentCard.front ? 1 : 0} onClick={() => editCard('front')}>
          <CardText>{currentCard.answer}</CardText>
        </CardBack>
      </CardWrapper>
      {isEditable && <button onClick={() => editCard('hide')}>Hide</button>}
      {hasAlreadyFlip ? <ContinueButton onClick={nextStep}>Continue</ContinueButton> : null}
    </CardContainer>
  );

};

export default Card;