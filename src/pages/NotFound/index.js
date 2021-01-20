import { AiOutlineAlert } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <AiOutlineAlert size="10rem" />
      <h1>Oh no!</h1>
      <strong>Nothing here</strong>
      <Link to="/">&larr; Go back to the Homepage</Link>
    </Container>
  );
}
