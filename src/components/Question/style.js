import styled from 'styled-components';

export const AnswersWrapper = styled.ul`
  list-style: nonel
`;

export const AnswerItem = styled.li`
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid black;
  ${({ correct }) => correct && `
    cursor: none;
    border: 2px solid green;
  `}
  ${({ wrong }) => wrong && `
    cursor: none;
    border: 2px solid red;
  `}
  width: 50%;
  padding: 15px 0;
`;