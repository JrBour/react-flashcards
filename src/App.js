import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCardsNotHide } from 'store/features/cards';
import Cards from 'components/Cards';
import Lessons from 'components/Lessons';
import { Nav, NavItem } from './style';

const App = () => {
  const cardsNotHide = useSelector(getCardsNotHide);
  const [itemSelected, setItemSelected] = useState('lessons');

  return (
    <>
      <Nav>
        <NavItem onClick={() => setItemSelected('lessons')} selected={itemSelected === 'lessons'}>lessons</NavItem>
        <NavItem onClick={() => setItemSelected('cards')} selected={itemSelected === 'cards'}>cards ({cardsNotHide.length})</NavItem>
      </Nav>
      {itemSelected === 'lessons' ? <Lessons cards={cardsNotHide}/> : <Cards/>}
    </>
  );
}

export default App;
