import React, { useEffect, useState } from 'react';
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
  TabWrapper,
  TabButton,
  ModalLeftContent,
  FeaturesContent,
  VehicleDetails,
  TitleVehicleDetails,
  VehicleDetailsList,
  ReviewsContent,
  ModalRightContent,
  RevieTitle,
  Avatar,
  RevieName,
} from './ModalStyled';

import {
  TitleCart,
  Secondrow,
  RatetxtCart,
  PlaceCart,
  PriceCart,
  ImgWrapper,
} from '../catalogcart/CatalogcartStyled';
import MyForm from 'components/form/MyForm';
import RaitingStars from 'components/raitingstars/RaitingStars';
import svg from '../../img/icons.svg';
import AdvantagesList from 'components/advantageslist/AdvantagesList';

const Modal = ({ isOpen, onClose, van }) => {
  // functions for openig and close Modal
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

  // functions for tabing Modal
  const [activeTab, setActiveTab] = useState('Features');
  const handleTabChange = tabName => {
    setActiveTab(tabName);
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

              <ModalTabsZone>
                <TabWrapper>
                  <TabButton
                    onClick={() => handleTabChange('Features')}
                    active={activeTab === 'Features'}
                  >
                    Features
                  </TabButton>
                  <TabButton
                    onClick={() => handleTabChange('Reviews')}
                    active={activeTab === 'Reviews'}
                  >
                    Reviews
                  </TabButton>
                </TabWrapper>

                <ModalLeftContent>
                  {activeTab === 'Features' ? (
                    <FeaturesContent>
                      <AdvantagesList van={van} />
                      <VehicleDetails>
                        <TitleVehicleDetails>
                          Vehicle details
                        </TitleVehicleDetails>
                        <VehicleDetailsList>
                          <li>
                            <p>
                              Form
                              <span>{van.form}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Length
                              <span>{van.length}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Width
                              <span>{van.width}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Height
                              <span>{van.height}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Tank
                              <span>{van.tank}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              Consumption
                              <span>{van.consumption}</span>
                            </p>
                          </li>
                        </VehicleDetailsList>
                      </VehicleDetails>
                    </FeaturesContent>
                  ) : (
                    <ReviewsContent>
                      {van.reviews.map((review, index) => (
                        <div key={index}>
                          <RevieTitle>
                            <Avatar>{review.reviewer_name.charAt(0)}</Avatar>
                            <div>
                              <RevieName>{review.reviewer_name}</RevieName>
                              <RaitingStars rating={review.reviewer_rating} />
                            </div>
                          </RevieTitle>
                          <div>{review.comment}</div>
                        </div>
                      ))}
                    </ReviewsContent>
                  )}
                </ModalLeftContent>

                <ModalRightContent>
                  <MyForm />
                </ModalRightContent>
              </ModalTabsZone>
            </ModalMainContent>
          </CatalogCartWrapperModal>
        </Blackdrop>
      )}
    </>
  );
};

export default Modal;
