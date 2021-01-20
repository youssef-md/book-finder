import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  h1 {
    flex: 1;
    padding: 2rem 0;
    border-bottom: 2px solid var(--dark-100);
  }
`;
