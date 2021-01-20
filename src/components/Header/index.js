import { Container } from './styles';
import HeaderButton from './HeaderButton';

export default function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <HeaderButton icon="search" route="/" />
        <HeaderButton icon="heart" route="/favorites" />
      </div>
    </Container>
  );
}
