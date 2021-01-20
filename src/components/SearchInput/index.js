import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from './styles';

export default function SearchInput({ inputRef, onChangeHandler }) {
  return (
    <Container>
      <input
        placeholder="What do you wan't to find?"
        ref={inputRef}
        onChange={onChangeHandler}
      />
      <AiOutlineSearch />
    </Container>
  );
}
