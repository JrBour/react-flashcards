import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cardsList : [
  {
    question: 'How to buffer an object ?',
    answer: 'Buffer. from(JSON. stringify(object)). toString()',
    hide: false,
    front: true,  
  },
  {
    question: 'What means API ?',
    answer: 'Application Programming Interface',
    hide: false,
    front: true,
  },
  {
    question: 'Whats the function of var definition ?',
    answer: 'Host the variable to the top of js code, so you can declare anywhere the effect will be the same as in the beginning',
    hide: false,
    front: true,
  },
  {
    question: 'What is the definition of let?',
    answer: 'Initiate a variable inside a scope',
    hide: false,
    front: true,  
  },
  {
    question: 'What is a ternary?',
    answer: 'One line if',
    hide: false,
    front: true,  
  },
]};

const cards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    edit(state, { payload }){
      state.cardsList = state.cardsList.map((card, index) => {
        if (payload.index === index) {
          return payload.card;
        } else {
          return card;
        }
      })
    },
  }
})

export const {
  edit,
} = cards.actions;

export default cards.reducer;

export const getCards = state => state.cards.cardsList;
export const getCardsNotHide = state => state.cards.cardsList.filter(card => !card.hide);


