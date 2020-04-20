import styled from 'styled-components';

export const AnswersWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionTitle = styled.h1`
  text-align: center;
`;

export const AnswerItem = styled.li`
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 10px;
  ${({ correct }) => correct && `
    cursor: none;
    border: 2px solid green;
  `}
  ${({ wrong }) => wrong && `
    cursor: none;
    border: 2px solid red;
  `}
  width: 50%;
  padding: 15px;
`;