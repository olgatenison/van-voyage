import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 60px;
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 10px;

  position: relative;

  padding-left: 20px;
  padding-right: 20px;
  gap: 10px;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.transblack};
  }
  @media screen and (min-width: 500px) {
    padding-left: 40px;
    padding-right: 40px;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 836px) {
    padding-left: 70px;
    padding-right: 70px;
    gap: 20px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.black};

  display: block;
  position: relative;

  &.active:after {
    content: '';
    z-index: 45;
    bottom: -20px;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.red};
    opacity: 1;
    transition: opacity 0.3s ease;
    position: absolute;
  }

  @media screen and (min-width: 500px) {
    font-size: 20px;
    max-width: 360px;
  }
`;
export const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
export const HeaderSvg = styled.svg`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
    width: 40px;
    height: 28px;
    fill: ${theme.colors.black};
    margin-right: 0;
  }
`;
