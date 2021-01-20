import { Container } from './styles';

export default function ShimmerBookCard() {
  return (
    <Container>
      <span className="fake-img" />

      <span className="fake-text fake-text--l"></span>
      <span className="fake-text fake-text--m"></span>

      <div className="inline">
        <span className="fake-text fake-text--s"></span>
        <span className="fake-text fake-text--s"></span>
        <span className="fake-text fake-text--s"></span>
      </div>

      <div className="inline">
        <span className="fake-text fake-text--s"></span>
        <span className="fake-text fake-text--s"></span>
        <span className="fake-text fake-text--s"></span>
      </div>

      <footer>
        <span className="btn btn--l"></span>
        <span className="btn btn--s"></span>
      </footer>
    </Container>
  );
}
