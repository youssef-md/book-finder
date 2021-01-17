import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-accent);
  color: white;
  padding: 1.8rem 3rem;
  border-radius: var(--border-radius-500);
  transition: all 0.2s;
  box-shadow: var(--shadow-500);

  &:hover {
    background: var(--color-accent-hover);
  }

  &:active {
    background: var(--color-accent-active);
  }
`;
