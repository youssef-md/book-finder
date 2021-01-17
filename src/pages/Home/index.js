import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { Container } from './styles';

export default function Search() {
  return (
    <>
      <Header title="Book Finder" />
      <Container>
        <SearchInput />
      </Container>
    </>
  );
}
