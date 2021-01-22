import { AiFillHeart, AiOutlineHeart, AiOutlineLink } from 'react-icons/ai';

import { Container } from './styles';
import Button from '../../components/Button';
import Chip from '../../components/Chip';
import { useFavoritedBooks } from '../../hooks/favoritedBooks';
import { useCallback, useState } from 'react';

export default function Detail({
  location: {
    state: { book },
  },
}) {
  const {
    volumeInfo: {
      id,
      title,
      publisher,
      publishedDate,
      authors,
      categories,
      pageCount,
      previewLink,
      description,
      imageLinks: { thumbnail },
    },
  } = book;
  const { addBook, removeBook, checkIsFavorited } = useFavoritedBooks();
  const [isFavorited, setIsFavorited] = useState(() => checkIsFavorited(id));

  const handleFavorite = useCallback(() => {
    setIsFavorited(true);
    addBook(book);
  }, [addBook, book]);

  const handleUnfavorite = useCallback(() => {
    setIsFavorited(false);
    removeBook(book);
  }, [removeBook, book]);

  return (
    <Container>
      <aside>
        <img src={thumbnail} alt={title} />
        <footer>
          <Button onClick={isFavorited ? handleUnfavorite : handleFavorite}>
            {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
            {isFavorited ? 'Unfavorite' : 'Favorite'}
          </Button>
          <a href={previewLink} target="_blank" rel="noreferrer">
            <Button>
              <AiOutlineLink />
              Preview
            </Button>
          </a>
        </footer>
      </aside>
      <main>
        <header>
          <h2>{title}</h2>
          <small>{`${publisher} - ${publishedDate}`}</small>
        </header>
        <div className="book-info">
          <div className="book-tile">
            <strong>Authors</strong>
            {authors?.map((author) => (
              <Chip key={author} text={author} />
            ))}
          </div>
          <div className="book-tile">
            <strong>Categories</strong>
            {categories?.map((category) => (
              <Chip key={category} text={category} />
            ))}
          </div>
          <div className="book-tile">
            <strong>Pages</strong>
            <p>{pageCount}</p>
          </div>
        </div>

        <strong>Description</strong>
        <p className="description">{description}</p>
      </main>
    </Container>
  );
}
