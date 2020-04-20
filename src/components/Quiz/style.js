import styled from 'styled-components';

export const QuizBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: #f7f7f7;
`;

export const QuizWrapper = styled.div`
  width: 80%;
  height: 80vh;
  background: white;
  position: relative;
`;

export const QuizHeader = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center
`

export const ProgressBarWrapper = styled.div`
  position: relative;
  height: 5px;
  background: #eef1f4;
  width: 90%;
  border-radius: 10px;
`

export const ProgressBar = styled.div`
  height: 5px;
  background: #ffd600;
  width: ${({ width }) => width}%;
  border-radius: 10px;
`

export const CloseButton = styled.button`
  border: none;
  font-weight: 600;
  font-size: 1.5em;
  background: transparent;
  cursor: pointer;
`;