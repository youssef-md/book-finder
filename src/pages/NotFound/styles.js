import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--dark-500);

  h1 {
    margin: 1rem 0 -0.5rem 0;
  }

  a {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid var(--dark-100);
  }
`;
