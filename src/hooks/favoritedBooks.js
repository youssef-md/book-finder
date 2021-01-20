import { createContext, useCallback, useContext, useState } from 'react';

const FavoritedBooksContext = createContext();

function FavoritedBooksProvider({ children }) {
  const [favoritedBooks, setFavoritedBooks] = useState([]);
  console.log({ favoritedBooks });

  function addBook(newBook) {
    if (favoritedBooks.find((book) => book.id === newBook.id)) return;
    setFavoritedBooks((prevState) => [newBook, ...prevState]);
  }

  function removeBook(newBook) {
    setFavoritedBooks((prevState) =>
      prevState.filter((book) => book.id !== newBook.id)
    );
  }

  function checkIsFavorited(bookId) {
    return favoritedBooks.find((book) => book.id === bookId);
  }

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
