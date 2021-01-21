import { useCallback, useEffect, useRef, useState } from 'react';

import { Container, BookFeed } from './styles';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { getBooksBySearch } from '../../services/books';
import BookCard from '../../components/BookCard';
import ShimmerBookCard from '../../components/BookCard/ShimmerBookCard';
import Pagination from '../../components/Pagination';

let timeoutId;

const SHIMMER_ELEMENTS_COUNT = 12;
const MAX_RESULTS = 12;

export default function Search() {
  const bookInput = useRef('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fetchBooksBySearch = useCallback(async () => {
    const search = bookInput.current.value;
    if (!isLoading) setIsLoading(true);

    const res = await getBooksBySearch(
      search,
      (currentPage - 1) * MAX_RESULTS,
      MAX_RESULTS
    );
    setBooks(res.items);
    setIsLoading(false);
    if (!totalItems) setTotalItems(res.totalItems);
  }, [currentPage, isLoading, totalItems]);

  const resetSearch = useCallback(() => {
    setIsLoading(false);
    setBooks([]);
    setCurrentPage(0);
    setTotalItems(0);
  }, []);

  const handleBookInput = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!isLoading) setIsLoading(true);

    const search = bookInput.current.value;
    if (!search) {
      resetSearch();
      return;
    }

    timeoutId = setTimeout(fetchBooksBySearch, 1000);
  }, [fetchBooksBySearch, isLoading, resetSearch]);

  const handleNewPage = useCallback(
    async (newPage) => {
      setCurrentPage(newPage);
      await fetchBooksBySearch();
    },
    [fetchBooksBySearch]
  );

  const getSearchedBooks = useCallback(() => {
    return books?.map((book) => <BookCard key={book.id} book={book} />);
  }, [books]);

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
        {books?.length > 0 && (
          <Pagination
            pages={Math.ceil(totalItems / MAX_RESULTS)}
            currentPage={currentPage}
            handleNewPage={handleNewPage}
          />
        )}
      </Container>
    </>
  );
}
