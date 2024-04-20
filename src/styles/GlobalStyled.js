import { css } from '@emotion/react';
import { theme } from './Theme';

export const globalStyled = css`
  body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: ${theme.colors.white};
  }
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: inherit;
    font-size: inherit;
    margin-top: 0;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
  }
  button {
    cursor: pointer;
  }
`;
