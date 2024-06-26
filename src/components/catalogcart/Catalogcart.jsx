import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../store/favorites/favorites.slice';

import { Redbutton } from 'pages/catalog/CatalogStyled';
import svg from '../../img/icons.svg';
import Modal from 'components/modal/Modal';
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
  AdvantagesListSmall,
} from './CatalogcartStyled';
import AdvantagesList from 'components/advantageslist/AdvantagesList';

const CatalogCart = ({ van }) => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = favorites.some(item => item._id === van._id);

  const handleToggleFavorites = () => {
    dispatch(toggleFavorites(van));
  };

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <AdvantagesListSmall key={van._id}>
            <AdvantagesList van={van} />
          </AdvantagesListSmall>
          <Redbutton onClick={handleShowModal}>Show more</Redbutton>
        </TextWrapper>
      </CatalogCartWrapper>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          van={van}
          onClose={handleCloseModal}
        ></Modal>
      )}
    </>
  );
};

export default CatalogCart;
