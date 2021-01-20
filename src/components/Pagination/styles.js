import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;

  button {
    width: 5rem;
    height: 5rem;
    margin: 1rem 0;

    & + button {
      margin-left: 1rem;
    }
  }
`;
