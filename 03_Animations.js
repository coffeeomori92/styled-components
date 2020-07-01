import React from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: bisque;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  font-weight: 600;
  color: white;
  appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline: none;
  }
  background-color: ${props => (props.danger ? "red" : "")};
  ${props => {
      if(props.danger){
        return css`animation: ${rotation} ${props.rotationTime}s linear infinite;`;
      }
  }}
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Button></Button>
      <Button danger rotationTime={5}>Hello</Button>
    </Container>
  )
};

export default App;