import styled from 'styled-components';

export const Container = styled.button`
  padding: 3.2rem 2.4rem;
  margin-left: 1.8rem;
  border: 2px solid white;
  border-radius: var(--border-radius-900);
  background: #f8f9ff;
  box-shadow: var(--shadow-200);
  transition: all 0.2s;

  &:hover {
    border: 2px solid var(--color-accent);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    display: flex;
  }
`;
