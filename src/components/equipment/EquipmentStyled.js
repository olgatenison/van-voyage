import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

export const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.black};
  max-width: 360px;
  position: relative;

  :after {
    position: absolute;
    content: '';
    bottom: -24px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.transblack};
  }
`;
export const List = styled.ul`
  padding-top: 48px;
  padding-bottom: 32px;
  max-width: 360px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  flex-shrink: 1;
  width: 114px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.transblack};
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease 0s;

  :hover,
  :focus,
  :active {
    border: 1px solid ${theme.colors.red};
  }
`;

export const Styledsvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: transparent;
  background-color: ${theme.colors.white};
  stroke: ${theme.colors.black};
`;
export const FirstStyledsvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: ${theme.colors.black};
  background-color: ${theme.colors.white};
  stroke: ${theme.colors.black};
`;

export const ButtonText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${theme.colors.black};
`;

export const Buttonstyled = styled.button`
  text-decoration: none;
  background-color: ${theme.colors.white};
`;
