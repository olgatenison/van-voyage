import { NavStyled, NavLinkStyled } from './NavigationStyled';

const Navigation = () => {
  return (
    <>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="favorite">Favorite</NavLinkStyled>
      </NavStyled>
    </>
  );
};

export default Navigation;
