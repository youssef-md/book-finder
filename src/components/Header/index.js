import { Container } from './styles';
import HeaderButton from './HeaderButton';

export default function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <HeaderButton icon="Search" route="/" />
        <HeaderButton icon="Heart" route="/favorites" />
      </div>
    </Container>
  );
}
