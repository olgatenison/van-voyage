import React from 'react';
import styled from '@emotion/styled';

import { theme } from 'styles/Theme';
import svg from '../../img/icons.svg';

const RaitingStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  return (
    <StyledRaitingStars>
      {[...Array(filledStars)].map((_, index) => (
        <svg key={index} viewBox="0 0 16 16">
          <use href={`${svg}#icon-star`} fill={theme.colors.yellow} />
        </svg>
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <svg key={index} viewBox="0 0 16 16">
          <use href={`${svg}#icon-star`} fill={theme.colors.transblack} />
        </svg>
      ))}
    </StyledRaitingStars>
  );
};

const StyledRaitingStars = styled.div`
  display: flex;
  gap: 5px;

  svg {
    display: block;
    width: 16px;
    height: 16px;
  }
`;

export default RaitingStars;
