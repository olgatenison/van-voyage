import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import { Link } from 'react-router-dom';

export const FavoriteWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media screen and (min-width: 500px) {
    padding: 0 20px;
    justify-content: start;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    padding: 0 64px;
    align-items: start;
  }
`;

export const TitleFavorite = styled.h2`
  font-weight: 900;
  font-size: 18px;
  line-height: 34px;
  color: ${theme.colors.black};
  width: 100vw;
  position: relative;
  padding-left: 30px;

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

  @media screen and (min-width: 500px) {
    padding-left: 0;
    max-width: 360px;
    font-size: 24px;
  }
`;

export const NoFavoritesMessage = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.gray};
  white-space: nowrap;
  margin-top: 20px;
  padding-left: 10px;
`;

export const RedbuttonFavorite = styled(Link)`
  display: block;
  width: 173px;
  height: 56px;
  border-radius: 28px;
  text-decoration: none;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :active,
  :focus {
    background-color: ${theme.colors.hoverred};
  }
`;
