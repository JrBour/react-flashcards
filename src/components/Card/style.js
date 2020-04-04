import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 200px; 
  height: 300px;
  margin: 20px;
`;

export const CardContainer = styled.div`
  position: relative;
`;

// export const 

export const CardFront = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-sizing: content-box;
  height: 100%;
  width: 100%;
  transition: 1s transform ease, 1.3s opacity ease;
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
  transition: 1s transform ease, 1s opacity ease;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,.18);
  ${({ display }) => display ? 'transform: rotateY(0); opacity : 1' : 'transform: rotateY(180deg); opacity: 0;' }
`;

export const CardText = styled.p`
  padding: 20px;
`