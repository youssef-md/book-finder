import { createContext, useCallback, useContext, useState } from 'react';

const FavoritedBooksContext = createContext();

function FavoritedBooksProvider({ children }) {
  const [favoritedBooks, setFavoritedBooks] = useState([]);

  const addBook = useCallback((newBook) => {
    setFavoritedBooks((prevState) => [newBook, ...prevState]);
  }, []);

  const removeBook = useCallback((newBook) => {
    setFavoritedBooks((prevState) =>
      prevState.filter((book) => book.id != newBook)
    );
  }, []);

  return (
    <FavoritedBooksContext.Provider
      value={{ favoritedBooks, addBook, removeBook }}
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
