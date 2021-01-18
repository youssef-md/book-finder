import { Search } from 'react-feather';
import { Container } from './styles';

export default function SearchInput({ inputRef, onChangeHandler }) {
  return (
    <Container>
      <input
        placeholder="What do you wan't to find?"
        ref={inputRef}
        onChange={onChangeHandler}
      />
      <Search />
    </Container>
  );
}
