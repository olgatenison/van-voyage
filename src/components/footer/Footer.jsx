import svg from '../../img/icons.svg';
import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Signature>
        <Link to="https://github.com/olgatenison">
          <svg>
            <use href={`${svg}#icon-github`}></use>
          </svg>
          Developed by Olga Tenison
        </Link>
        {/* <Car>
          <svg>
            <use href={`${svg}#icon-van3`}></use>
          </svg>
        </Car> */}
      </Signature>
    </>
  );
};

export default Footer;

export const Car = styled.div`
  svg {
    display: block;
    width: 40px;
    height: 28px;
    fill: ${theme.colors.black};
    margin-right: 0;
  }
`;

export const Signature = styled.div`
  padding-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  opacity: 1;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    bottom: -70px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.transblack};
  }
  a {
    padding-top: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: ${theme.colors.black};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${theme.colors.black};
    background-color: transparent;
    stroke: ${theme.colors.black};
    margin-right: 10px;
    transition: all 0.3s ease;
  }
  :hover,
  :focus,
  :active {
    svg {
      fill: ${theme.colors.red};
      background-color: transparent;
      stroke: ${theme.colors.red};
    }
  }
`;
