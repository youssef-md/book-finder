import { Container } from './styles';

export default function Button({ children, onClick }) {
  return <Container onClick={onClick}>{children}</Container>;
}
