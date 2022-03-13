import React from 'react';
import Button from './components/Button';
import { Container, Logo, Subtitle, Title } from './styles';

export default function App() {
  return (
    <Container>
      <Title>Conto contigo Mengão !</Title>
      <Subtitle>Acima de tudo Rubro Negro ❤️🖤</Subtitle>
      <Logo source={require('./assets/mengo.png')}></Logo>

      <Button title="Comprar nossos produtos" bgcolor='red' />
      <Button title="Acompanhe as novidades" bgcolor='white' />

    </Container>
  );
}
