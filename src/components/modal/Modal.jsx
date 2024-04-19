import React, { useEffect } from 'react';
import {
  Blackdrop,
  CatalogCartWrapperModal,
  ImgWrapperModal,
  FirstrowModal,
  DescriptionCartModal,
  ButtonClose,
  ModalSmalWrapp,
  ModalMainContent,
  InfoFromCard,
  ModalTabsZone,
} from './ModalStyled';

import {
  TitleCart,
  Secondrow,
  RatetxtCart,
  PlaceCart,
  PriceCart,
  ImgWrapper,
} from '../catalogcart/CatalogcartStyled';
import svg from '../../img/icons.svg';

const Modal = ({ isOpen, onClose, van }) => {
  // functions for openin and close Modal
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Blackdrop onClick={handleClickOutside}>
          <CatalogCartWrapperModal>
            <FirstrowModal>
              <ModalSmalWrapp>
                <TitleCart>{van.name}</TitleCart>
                <ButtonClose onClick={onClose}>
                  <svg>
                    <use href={`${svg}#icon-cros`} />
                  </svg>
                </ButtonClose>
              </ModalSmalWrapp>
              <Secondrow>
                <RatetxtCart>
                  {van.rating} ({van.reviews.length} Reviews)
                </RatetxtCart>
                <PlaceCart>{van.location}</PlaceCart>
              </Secondrow>
              <PriceCart>€{van.price}.00</PriceCart>
            </FirstrowModal>

            <ModalMainContent>
              <InfoFromCard>
                <ImgWrapperModal>
                  <ImgWrapper>
                    <img src={van.gallery[0]} alt={van.name} />
                  </ImgWrapper>
                  <ImgWrapper>
                    <img src={van.gallery[1]} alt={van.name} />
                  </ImgWrapper>
                  <ImgWrapper>
                    <img src={van.gallery[2]} alt={van.name} />
                  </ImgWrapper>
                </ImgWrapperModal>
                <DescriptionCartModal>{van.description}</DescriptionCartModal>
              </InfoFromCard>

              <ModalTabsZone></ModalTabsZone>
            </ModalMainContent>
          </CatalogCartWrapperModal>
        </Blackdrop>
      )}
    </>
  );
};

export default Modal;
