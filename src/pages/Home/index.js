import { useCallback, useRef } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { getBooksBySearch } from '../../services/books';
import { debouncer } from '../../utils/methods';

const debouncedBookRequest = debouncer(getBooksBySearch, 1000);

export default function Search() {
  const bookInput = useRef('');

  const handleBookInput = useCallback(async (event) => {
    debouncedBookRequest(event.target.value);
  });

  return (
    <>
      <Header title="Book Finder" />
      <Container>
        <SearchInput inputRef={bookInput} onChangeHandler={handleBookInput} />
      </Container>
    </>
  );
}
