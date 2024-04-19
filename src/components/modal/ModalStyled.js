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

  z-index: 10;
`;

// white bg
export const CatalogCartWrapperModal = styled.div`
  width: 982px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 20px;
  margin-top: 20px;
  gap: 34px;
  flex-shrink: 1;
  background-color: ${theme.colors.white};
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
    width: 32px;
    height: 32px;
    stroke: ${theme.colors.black};
  }
`;

// here is scroll part
export const ModalMainContent = styled.div``;

// info fron small cart
export const InfoFromCard = styled.div``;
export const ModalSmalWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ImgWrapperModal = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-shrink: 1;
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
export const ModalTabsZone = styled.div``;
