import { useCallback, useRef, useState } from 'react';

import { Container, BookFeed } from './styles';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { getBooksBySearch } from '../../services/books';
import BookCard from '../../components/BookCard';
import ShimmerBookCard from '../../components/BookCard/ShimmerBookCard';

let timeoutId;

const SHIMMER_ELEMENTS_COUNT = 10;

export default function Search() {
  const bookInput = useRef('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookInput = useCallback(async ({ target: { value: search } }) => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!isLoading) setIsLoading(true);
    if (!search) {
      setIsLoading(false);
      setBooks([]);
      return;
    }

    timeoutId = setTimeout(async () => {
      const res = await getBooksBySearch(search);
      console.log(res);
      setBooks(res.items);
      setIsLoading(false);
    }, 800);
  }, []);

  // uses function declaration due to useCallback memoizing BookCards
  function getSearchedBooks() {
    return books?.map((book) => <BookCard key={book.id} book={book} />);
  }

  const handleLoading = useCallback(() => {
    return [...Array(SHIMMER_ELEMENTS_COUNT)].map((_, i) => (
      <ShimmerBookCard key={i} />
    ));
  }, []);

  return (
    <>
      <Header title="Book Finder" />
      <Container>
        <SearchInput inputRef={bookInput} onChangeHandler={handleBookInput} />
        <BookFeed>{isLoading ? handleLoading() : getSearchedBooks()}</BookFeed>
      </Container>
    </>
  );
}
