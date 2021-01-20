import { Container } from './styles';

export default function Button({ children, onClick, type = 'primary' }) {
  return (
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
