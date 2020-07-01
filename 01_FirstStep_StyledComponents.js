import React from 'react';
import styled from 'styled-components';

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
  background-color: ${props => (props.danger ? "red" : "")}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: bisque;
`;

const App = () => {
  return (
    <Container>
     <Button></Button>
     <Button danger>Hello</Button>
    </Container>
  )
};

export default App;