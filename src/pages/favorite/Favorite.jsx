import React from 'react';
import { useSelector } from 'react-redux';

import { CatalogListAll } from 'pages/catalog/CatalogStyled';
import CatalogCart from 'components/catalogcart/Catalogcart';
import {
  FavoriteWrapper,
  TitleFavorite,
  NoFavoritesMessage,
  RedbuttonFavorite,
} from './FavoriteStyled';

const Favorite = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <>
      <FavoriteWrapper>
        <aside>
          <TitleFavorite>
            Favorite Picks:
            <br />
            These Vans Caught Your Eye
          </TitleFavorite>
        </aside>
        <div>
          {favorites.length > 0 ? (
            <CatalogListAll>
              {favorites.map(van => (
                <CatalogCart key={van._id} van={van} />
              ))}
            </CatalogListAll>
          ) : (
            <>
              <RedbuttonFavorite to="/catalog">
                Return to Catalog
              </RedbuttonFavorite>
              <NoFavoritesMessage>No favorite picks yet</NoFavoritesMessage>
            </>
          )}
        </div>
      </FavoriteWrapper>
    </>
  );
};

export default Favorite;
