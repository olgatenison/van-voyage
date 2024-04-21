import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import { Link } from 'react-router-dom';

export const FavoriteWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 0 64px;
  gap: 64px;
`;

export const TitleFavorite = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 34px;
  color: ${theme.colors.black};
  width: 360px;
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
