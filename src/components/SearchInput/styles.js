import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 3.5rem 8.5rem 3.5rem 3.5rem;
    border-radius: var(--border-radius-500);
    box-shadow: var(--shadow-200);
    border: 2px solid white;
    transition: all 0.2s;

    &:focus {
      border-color: var(--color-accent);
    }

    &:focus + svg {
      color: var(--color-accent);
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 3.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--dark-500);
    transition: all 0.2s;
  }
`;
