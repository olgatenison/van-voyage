import Marquee from 'react-fast-marquee';
import svg from '../../img/icons.svg';
import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

const Car = () => {
  return (
    <>
      {' '}
      <CarWrapper>
        <Marquee direction="right" gradient="true" pauseOnHover="true">
          <svg>
            <use href={`${svg}#icon-van3`}></use>
          </svg>
        </Marquee>{' '}
      </CarWrapper>
    </>
  );
};

export default Car;

export const CarWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding-top: 20px;

  svg {
    display: block;
    width: 40px;
    height: 28px;
    fill: ${theme.colors.black};
    margin-right: 0;
  }
`;
