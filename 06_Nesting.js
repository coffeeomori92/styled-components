import React from 'react';
import styled, { createGlobalStyle, keyframes, css, ThemeProvider } from 'styled-components';

import theme from './05_theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

const AwesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: bisque;
  ${Card} {
    background-color: blue;
  }
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  font-weight: 600;
  color: ${props => props.theme.mainColor};
  appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline: none;
  }
  background-color: ${props => (props.danger ? "red" : "")};
  /* ${props => {
      if(props.danger){
        return css`animation: ${rotation} ${props.rotationTime}s linear infinite;`;
      }
  }} */
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: 'hello'
})`
  ${AwesomeCard}
  border: none;
`;

const Form = () => (<Card><Button>Hello</Button></Card>);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Button></Button>
        <Button danger rotationTime={5}>Hello</Button>
        <Input />
        <Form/>
      </Container>
    </ThemeProvider>
  )
};



export default App;