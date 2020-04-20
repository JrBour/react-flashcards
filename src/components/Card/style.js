import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 200px; 
  height: 300px;
  margin: 20px;
  opacity: ${({ hide }) => hide ? '.5' : '1'}
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const ContinueButton = styled.button`
  display: block;
  background: #32cdff;
  color: #fff;
  text-transform: uppercase;
  margin: auto;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
`

export const CardFront = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-sizing: content-box;
  height: 100%;
  width: 100%;
  transition: 1s transform ease, opacity linear .8s;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,.18);
  ${({ display }) => display ? 'transform: rotateY(0deg); opacity : 1' : 'transform: rotateY(180deg); opacity: 0' }

`;

export const CardBack = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  box-sizing: content-box;  
  text-align: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: 1s transform ease, opacity linear .8s;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,.18);
  ${({ display }) => display ? 'transform: rotateY(0); opacity : 1' : 'transform: rotateY(180deg); opacity: 0;' }
`;

export const CardText = styled.p`
  padding: 20px;
`