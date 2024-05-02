import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import pin_a from '../../img/map-pin.svg';
import star from '../../img/star-y.svg';

export const CatalogCartWrapper = styled.div`
  max-width: 320px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 17px;
  border-radius: 20px;
  border: solid 1px ${theme.colors.transblack};
  gap: 24px;
  flex-shrink: 1;

  @media screen and (min-width: 500px) {
    max-width: 460px;
  }
  @media screen and (min-width: 836px) {
    max-width: 836px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 24px;
    border-radius: 20px;
    border: solid 1px ${theme.colors.transblack};
    gap: 24px;
    flex-shrink: 1;
  }
  @media screen and (min-width: 1080px) {
    max-width: 880px;
    margin-right: 40px;
    flex-shrink: 1;
  }
`;

export const ImgWrapper = styled.div`
  width: 280px;
  height: 310px;
  border-radius: 10px;
  background-color: ${theme.colors.transblack};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  @media screen and (min-width: 500px) {
    width: 410px;
  }
  @media screen and (min-width: 836px) {
    width: 260px;
    height: 290px;
  }
  @media screen and (min-width: 1360px) {
    width: 280px;
    height: 310px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 300px;

  @media screen and (min-width: 500px) {
    max-width: 410px;
  }
  @media screen and (min-width: 836px) {
    max-width: 426px;
  }
  @media screen and (min-width: 1360px) {
    max-width: 520px;
  }
`;

export const Firstrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 836px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FirstrowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (min-width: 500px) {
    justify-content: start;
    gap: 24px;
  }
`;

export const TitleCart = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  color: ${theme.colors.black};
  text-align: center;

  @media screen and (min-width: 500px) {
    text-align: left;
  }
`;

export const PriceCart = styled.h3`
  font-weight: 900;
  font-size: 24px;
  line-height: 20px;
  color: ${theme.colors.black};
  padding-top: 2px;
  padding-bottom: 20px;
  @media screen and (min-width: 836px) {
    padding-bottom: 0px;
  }
`;

export const Favotitebtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${props => (props.isFavorite ? 'red' : theme.colors.black)};
    fill: ${props => (props.isFavorite ? 'red' : 'transparent')};
    transition: all 0.3s ease;
  }
`;

export const Secondrow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 16px;

  @media screen and (min-width: 837px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const RatetxtCart = styled.p`
  font-weight: 400;

  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.black};
  padding-left: 20px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 16px 16px;
  position: relative;

  ::after {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 20px;
    display: block;
    width: 86%;
    height: 1px;
    background-color: ${theme.colors.black};
  }
`;

export const PlaceCart = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.black};
  padding-left: 20px;
  background-image: url(${pin_a});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 16px 16px;
`;

export const DescriptionCart = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.gray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`;

export const AdvantagesListSmall = styled.div`
  max-height: 100px;
  overflow: hidden;
  & Redbutton {
    margin-top: 40px;
  }
`;
