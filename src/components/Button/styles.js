import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    background: var(--color-accent);
    color: white;
    box-shadow: var(--shadow-500);

    &:hover {
      background: var(--color-accent-hover);
    }

    &:active {
      background: var(--color-accent-active);
    }
  `,
  secondary: css`
    border: 2px solid var(--color-accent-hover);
    color: var(--color-accent-hover);
    background: none;

    &:hover {
      color: white;
      background: var(--color-accent-hover);
    }
  `,
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: var(--border-radius-500);
  transition: all 0.2s;

  ${({ type }) => variations[type]};

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
