import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 0;
`;

export const BookFeed = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2.2rem;
`;
