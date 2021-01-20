import Button from '../Button';
import { Container } from './styles';

export default function Pagination({ pages, currentPage, handleNewPage }) {
  return (
    <Container>
      {[...Array(pages)].map((_, page) => (
        <Button
          key={page}
          type={page === currentPage ? 'primary' : 'secondary'}
          onClick={() => handleNewPage(page)}
        >
          {page}
        </Button>
      ))}
    </Container>
  );
}
