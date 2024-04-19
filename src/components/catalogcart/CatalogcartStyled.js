import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import pin_a from '../../img/map-pin.svg';
import star from '../../img/star-y.svg';

export const CatalogCartWrapper = styled.div`
  width: 888px;
  margin: 0 auto;
  display: flex;
  padding: 24px;
  border-radius: 20px;
  border: solid 1px ${theme.colors.transblack};
  gap: 24px;
  flex-shrink: 1;
`;

export const ImgWrapper = styled.div`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  background-color: ${theme.colors.transblack};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 526px;
`;

export const Firstrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FirstrowWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TitleCart = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 20px;
  color: ${theme.colors.black};
`;

export const PriceCart = styled.h3`
  font-weight: 900;
  font-size: 24px;
  line-height: 20px;
  color: ${theme.colors.black};
  padding-top: 2px;
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
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
`;

export const CategoriesWrappwerCart = styled.div`
  display: flex;
`;
