import { useCallback, useRef, useState } from 'react';

import { Container, BookFeed } from './styles';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { getBooksBySearch } from '../../services/books';
import BookCard from '../../components/BookCard';

let timeoutId;

export default function Search() {
  const bookInput = useRef('');
  const [books, setBooks] = useState([]);

  const handleBookInput = useCallback(async (event) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(async () => {
      const res = await getBooksBySearch(event.target.value);
      setBooks(res.items);
    }, 1000);
  });

  return (
    <>
      <Header title="Book Finder" />
      <Container>
        <SearchInput inputRef={bookInput} onChangeHandler={handleBookInput} />
        <BookFeed>
          {books?.map((book) => {
            const { id, volumeInfo } = book;
            return (
              <BookCard
                key={id}
                thumbnail={volumeInfo.imageLinks?.thumbnail}
                title={volumeInfo.title}
                authors={volumeInfo.authors}
                categories={volumeInfo.categories}
              />
            );
          })}
        </BookFeed>
      </Container>
    </>
  );
}
