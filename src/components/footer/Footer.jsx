import svg from '../../img/icons.svg';
import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import { Link } from 'react-router-dom';
import Car from 'components/car/Car';

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
      </Signature>
      <Car />
    </>
  );
};

export default Footer;

export const Signature = styled.div`
  margin-bottom: 20px;
  padding-top: 230px;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  opacity: 1;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    bottom: -38px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.transblack};
  }
  a {
    font-weight: 600;
    font-size: 18px;
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

  @media screen and (min-width: 500px) {
    padding-top: 30px;
    a {
      font-size: 20px;
      padding-top: 8px;
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
  }
`;
