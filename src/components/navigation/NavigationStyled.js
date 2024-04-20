import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/Theme';

export const NavStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  height: 60px;
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-left: 70px;
  padding-right: 70px;
  position: relative;

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
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.black};
  max-width: 360px;
  display: block;
  position: relative;

  &:after {
    content: '';
    z-index: 45;
    bottom: -20px;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.red};
    opacity: ${props => (props.active ? '1' : '0')};
    transition: opacity 0.3s ease;
    position: absolute;
  }
`;

export const HeaderSvg = styled.svg`
  display: block;
  width: 40px;
  height: 28px;
  fill: ${theme.colors.black};
  margin-right: 0;
`;
