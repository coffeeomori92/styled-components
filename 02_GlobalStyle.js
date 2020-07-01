import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: bisque;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Button></Button>
      <Button danger>Hello</Button>
    </Container>
  )
};

export default App;