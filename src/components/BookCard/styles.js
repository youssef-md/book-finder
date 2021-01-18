import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  background: white;
  box-shadow: var(--shadow-200);
  border-radius: var(--border-radius-200);

  p {
    text-align: center;
    font-weight: bold;
  }

  img {
    width: 18rem;
    height: 25rem;
    border-radius: var(--border-radius-200);
    border: 2px solid var(--dark-200);
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > button:first-of-type {
      flex: 1;
    }

    > button + button {
      margin-left: 1rem;
    }
  }
`;
