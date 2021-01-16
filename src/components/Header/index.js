import { Container } from './styles';
import HeaderButton from './HeaderButton';

export default function Header() {
  return (
    <Container>
      <h1>Book Finder</h1>
      <div>
        <HeaderButton icon="Search" />
        <HeaderButton icon="Heart" />
      </div>
    </Container>
  );
}
