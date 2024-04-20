import {
  NavStyled,
  NavLinkStyled,
  NavLinksWrapper,
  HeaderSvg,
} from './NavigationStyled';
import svg from '../../img/icons.svg';

const Navigation = () => {
  return (
    <>
      <NavStyled>
        <NavLinksWrapper>
          <NavLinkStyled exact to="/" activeClassName="activeLink">
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/catalog" activeClassName="activeLink">
            Catalog
          </NavLinkStyled>
          <NavLinkStyled to="/favorite" activeClassName="activeLink">
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
