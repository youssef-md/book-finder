import styled from 'styled-components';

export const Container = styled.button`
  padding: 3.2rem 2.4rem;
  margin-left: 1.8rem;
  border: 2px solid
    ${({ isSelected }) => (isSelected ? 'var(--color-accent-active)' : 'white')};
  border-radius: var(--border-radius-900);
  background: #f8f9ff;
  box-shadow: var(--shadow-200);
  transition: all 0.2s;

  &:hover,
  &:focus {
    border: 2px solid var(--color-accent);
  }

  &:hover > svg,
  &:focus > svg {
    color: var(--color-accent-hover);
  }

  &:active {
    border: 2px solid var(--color-accent-active);
  }

  > svg {
    color: ${({ isSelected }) =>
      isSelected ? 'var(--color-accent-active)' : 'black'};
  }
`;
