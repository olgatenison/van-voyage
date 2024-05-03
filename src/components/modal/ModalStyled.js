import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

export const Blackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 90;
`;

// white bg
export const CatalogCartWrapperModal = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background-color: ${theme.colors.white};

  padding: 20px;

  @media screen and (min-width: 500px) {
    max-width: 982px;
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
    padding: 40px;
    padding-right: 30px;
    border-radius: 20px;
    gap: 34px;
    flex-shrink: 1;
  }
`;

export const FirstrowModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
  svg {
    width: 20px;
    height: 20px;
    stroke: ${theme.colors.black};
  }
`;

// here is scroll part
export const ModalMainContent = styled.div`
  overflow-y: auto;
  max-height: 500px;
  padding-right: 10px;
  padding-bottom: 60px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 3px;
    height: 100px;
    border-radius: 3px;
    background-color: ${theme.colors.transblack};
  }
`;

// info fron small cart
export const InfoFromCard = styled.div``;
export const ModalSmalWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgWrapperModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  flex-shrink: 1;

  @media screen and (min-width: 837px) {
    flex-direction: row;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 526px;
`;
export const DescriptionCartModal = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.gray};
  text-align: justify;
  padding-top: 24px;
  padding-bottom: 44px;
`;

//tabs down part
export const ModalTabsZone = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TabWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  margin-bottom: 70px;
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

// tabs
export const TabButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.black};
  margin-right: 40px;
  position: relative;

  :after {
    position: absolute;
    content: '';
    z-index: 45;
    bottom: -26px;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${theme.colors.red};
    opacity: ${props => (props.active ? '1' : '0')};
    transition: opacity 0.3s ease;
  }
`;

// left
export const ModalLeftContent = styled.div`
  width: 100%;
  @media screen and (min-width: 836px) {
    width: 50%;
  }
`;
export const FeaturesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding-right: 24px;
`;
export const VehicleDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleVehicleDetails = styled.h2`
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.black};
  max-width: 430px;
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
export const VehicleDetailsList = styled.ul`
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  li {
    padding-bottom: 14px;

    p {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export const ReviewsContent = styled.div`
  padding-right: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
// right
export const ModalRightContent = styled.div`
  width: 95%;
  border-top: 1px solid ${theme.colors.transblack};
  padding-top: 40px;

  @media screen and (min-width: 836px) {
    flex-grow: 1;
    width: 50%;
    height: 532px;
    margin-right: auto;
    border-radius: 10px;
    border: 1px solid ${theme.colors.transblack};
    padding: 24px;
  }
`;
export const RevieTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.lightgrey};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: ${theme.colors.red};
`;
export const RevieName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${theme.colors.black};
  padding-bottom: 4px;
`;
