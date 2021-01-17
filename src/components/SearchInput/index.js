import { Search } from 'react-feather';
import { Container } from './styles';

export default function SearchInput() {
  return (
    <Container>
      <input placeholder="What do you wan't to find?" />
      <Search />
    </Container>
  );
}
