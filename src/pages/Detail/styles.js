import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 5rem 0;

  aside {
    margin-right: 3.8rem;

    img {
      width: 30rem;
      border: 2px solid var(--dark-200);
      border-radius: var(--border-radius-500);
    }

    footer {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;

      button {
        padding-left: 2.2rem;
        padding-right: 2.2rem;

        svg {
          margin-right: 0.5rem;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }

  header {
    h2 {
      margin-bottom: 1rem;
    }

    border-bottom: 2px solid var(--dark-100);
    padding: 3rem 0;
    margin-bottom: 4rem;
  }
  strong {
    display: block;
    margin-bottom: 1.5rem;
  }

  .book-info {
    display: flex;
    margin-bottom: 4rem;
    flex-wrap: wrap;

    .book-tile {
      & + .book-tile {
        margin-left: 6rem;
      }

      small,
      span {
        font-size: 1.5rem;
        margin: 0;
        margin-left: -0.2rem;
      }
    }
  }

  .description {
    line-height: 3.6rem;
    text-align: justify;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    aside {
      width: 60%;
      margin: auto;
      text-align: center;

      img {
        width: 80%;
      }

      footer {
        justify-content: space-evenly;
      }
    }
  }

  @media (max-width: 500px) {
    footer {
      flex-direction: column;

      button {
        width: 100%;
        margin-bottom: 1.5rem;
      }
    }

    .book-tile {
      text-align: center;

      & + .book-tile {
        margin-left: 1rem !important;
      }
    }
  }
`;
