import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

export const Title = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.black};
  max-width: 170px;
  position: relative;

  :after {
    position: absolute;
    content: '';
    bottom: -13px;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.transblack};
  }
  @media screen and (min-width: 1080px) {
    max-width: 360px;
    :after {
      position: absolute;
      content: '';
      bottom: -24px;
    }
  }
`;
export const List = styled.ul`
  padding-top: 28px;
  padding-bottom: 34px;
  max-width: 360px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  @media screen and (min-width: 1080px) {
    padding-top: 48px;
    padding-bottom: 64px;
  }
`;

export const Item = styled.li`
  flex-shrink: 1;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.transblack};
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease 0s;
  @media screen and (min-width: 1080px) {
    width: 114px;
    height: 95px;
    :hover,
    :focus,
    :active {
      border: 1px solid ${theme.colors.red};
    }
  }
`;

export const FirstStyledsvg = styled.svg`
  width: 30px;
  height: 18px;
  fill: ${theme.colors.black};
  background-color: ${theme.colors.white};
  stroke: transparent;
  @media screen and (min-width: 1080px) {
    width: 40px;
    height: 28px;
  }
`;

export const ButtonText = styled.p`
  display: none;
  @media screen and (min-width: 1080px) {
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${theme.colors.black};
  }
`;

export const Buttonstyled = styled.button`
  text-decoration: none;
  background-color: ${theme.colors.white};
`;
