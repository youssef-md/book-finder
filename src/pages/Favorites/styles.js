import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 5rem;
`;

export const BookFeed = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2.2rem;
`;
