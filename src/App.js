import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCardsNotHide, getCards } from 'store/features/cards';
import Cards from 'components/Cards';
import Lessons from 'components/Lessons';
import { Nav, NavItem } from './style';

const App = () => {
  const cardsNotHide = useSelector(getCardsNotHide);
  const cards = useSelector(getCards);
  const [itemSelected, setItemSelected] = useState('lessons');

  return (
    <>
      <Nav>
        <NavItem onClick={() => setItemSelected('lessons')} selected={itemSelected === 'lessons'}>lessons</NavItem>
        <NavItem onClick={() => setItemSelected('cards')} selected={itemSelected === 'cards'}>cards ({cardsNotHide.length})</NavItem>
      </Nav>
      {itemSelected === 'lessons' ? <Lessons cardsNotHide={cardsNotHide} cards={cards}/> : <Cards/>}
    </>
  );
}

export default App;
