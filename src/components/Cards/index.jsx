import React from 'react';
import Card from '../Card';
import { getCards } from 'store/features/cards';
import { useSelector } from 'react-redux';
import { CardsWrapper } from './style';

const Cards = () => {
  const cards = useSelector(getCards);
  return (
    <CardsWrapper>
      {cards.map((card, index) => <Card key={index} index={index} card={card} isEditable/>)}
    </CardsWrapper>
  );
}

export default Cards;