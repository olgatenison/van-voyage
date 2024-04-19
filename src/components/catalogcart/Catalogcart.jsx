import { Redbutton } from 'pages/catalog/CatalogStyled';
import {
  CatalogCartWrapper,
  ImgWrapper,
  TextWrapper,
  Firstrow,
  FirstrowWrapper,
  TitleCart,
  PriceCart,
  Favotitebtn,
  Secondrow,
  RatetxtCart,
  PlaceCart,
  DescriptionCart,
  // CategoriesWrappwerCart,
} from './CatalogcartStyled';
import svg from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../store/favorites/favorites.slice';

const CatalogCart = ({ van }) => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(item => item._id === van._id);

  const handleToggleFavorites = () => {
    dispatch(toggleFavorites(van));
  };

  return (
    <>
      <CatalogCartWrapper>
        <ImgWrapper>
          <img src={van.gallery[0]} alt={van.name} />
        </ImgWrapper>
        <TextWrapper>
          <Firstrow>
            <TitleCart>{van.name}</TitleCart>
            <FirstrowWrapper>
              <PriceCart>€{van.price}.00</PriceCart>
              <Favotitebtn
                onClick={handleToggleFavorites}
                isFavorite={isFavorite}
              >
                <svg>
                  <use href={`${svg}#icon-hart`} />
                </svg>
              </Favotitebtn>
            </FirstrowWrapper>
          </Firstrow>
          <Secondrow>
            <RatetxtCart>
              {van.rating} ({van.reviews.length} Reviews)
            </RatetxtCart>
            <PlaceCart>{van.location}</PlaceCart>
          </Secondrow>
          <DescriptionCart>{van.description}</DescriptionCart>
          {/* <CategoriesWrappwerCart>{van.details}</CategoriesWrappwerCart> */}
          <Redbutton>Show more</Redbutton>
        </TextWrapper>
      </CatalogCartWrapper>
    </>
  );
};

export default CatalogCart;
