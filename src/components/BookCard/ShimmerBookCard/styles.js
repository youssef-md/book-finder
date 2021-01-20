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

  .fake-img {
    width: 18rem;
    height: 25rem;
    margin-bottom: 2rem;
    border-radius: var(--border-radius-200);
    border: 2px solid var(--dark-200);
    ${({ theme }) => theme.shimmerize};
  }

  .fake-text {
    height: 2rem;
    margin-top: 1rem;
    border-radius: var(--border-radius-200);
    ${({ theme }) => theme.shimmerize};

    &--l {
      width: 90%;
    }
    &--m {
      width: 50%;
    }
    &--s {
      width: 30%;
    }
  }

  .inline {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 1.2rem;
  }

  footer {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .btn {
    height: 5rem;
    border-radius: var(--border-radius-200);
    ${({ theme }) => theme.shimmerize};

    &--l {
      width: 75%;
    }
    &--s {
      width: 20%;
    }
  }
`;
