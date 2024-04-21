import React from 'react';

import {
  NavStyled,
  NavLinksWrapper,
  NavLinkStyled,
  HeaderSvg,
} from './NavigationStyled';
import svg from '../../img/icons.svg';

const Navigation = () => {
  return (
    <>
      <NavStyled>
        <NavLinksWrapper>
          <NavLinkStyled exact to="/" activeClassName="active">
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/catalog" activeClassName="active">
            Catalog
          </NavLinkStyled>
          <NavLinkStyled to="/favorite" activeClassName="active">
            Favorite
          </NavLinkStyled>
        </NavLinksWrapper>
        <HeaderSvg>
          <use href={`${svg}#icon-van3`}></use>
        </HeaderSvg>
      </NavStyled>
    </>
  );
};

export default Navigation;
