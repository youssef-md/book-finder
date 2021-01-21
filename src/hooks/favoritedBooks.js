import { createContext, useCallback, useContext, useState } from 'react';

const FavoritedBooksContext = createContext();

function FavoritedBooksProvider({ children }) {
  const [favoritedBooks, setFavoritedBooks] = useState([]);

  const addBook = useCallback(
    (newBook) => {
      if (favoritedBooks.find((book) => book.id === newBook.id)) return;
      setFavoritedBooks((prevState) => [newBook, ...prevState]);
    },
    [favoritedBooks]
  );

  const removeBook = useCallback((newBook) => {
    setFavoritedBooks((prevState) =>
      prevState.filter((book) => book.id !== newBook.id)
    );
  }, []);

  const checkIsFavorited = useCallback(
    (bookId) => {
      return favoritedBooks.find((book) => book.id === bookId);
    },
    [favoritedBooks]
  );

  return (
    <FavoritedBooksContext.Provider
      value={{ favoritedBooks, addBook, removeBook, checkIsFavorited }}
    >
      {children}
    </FavoritedBooksContext.Provider>
  );
}

function useFavoritedBooks() {
  const context = useContext(FavoritedBooksContext);

  if (!context) throw new Error('A hook must be used inside its provider');

  return context;
}

export { FavoritedBooksProvider, useFavoritedBooks };
