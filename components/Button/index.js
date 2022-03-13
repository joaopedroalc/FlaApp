import React from 'react';
import { Container, TextButton } from './styles';

export default function Button({bgcolor, title}) {

  return(
    <Container style={{ backgroundColor: bgcolor}}>
      <TextButton style={{color: bgcolor === 'red' ? 'white' : 'black'}}>{title}</TextButton>
    </Container>
  )
}