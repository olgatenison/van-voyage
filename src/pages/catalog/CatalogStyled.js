import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import pin from '../../img/map-pin.svg';
import pin_a from '../../img/map-pin-p.svg';

export const CatalogSection = styled.div`
  aside {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 836px) {
    max-width: 836px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 24px;

    aside {
      display: flex;
      flex-direction: row;
      gap: 40px;
      justify-content: space-between;
      align-items: start;
    }
  }

  @media screen and (min-width: 1080px) {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 30px;

    aside {
      flex-direction: column;
      gap: 20px;
      justify-content: start;
      align-items: start;
      max-width: 280px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 0 20px;
    aside {
      max-width: 360px;
    }
  }
`;

export const CatalogSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const CatalogListAll = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 30px;
`;

export const Subtitle = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.gray};
  padding-bottom: 14px;
  padding-top: 13px;
`;

export const Redbutton = styled.button`
  display: block;
  width: 260px;
  height: 56px;
  border-radius: 28px;
  text-decoration: none;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease 0s;
  margin-bottom: 30px;

  :hover,
  :active,
  :focus {
    background-color: ${theme.colors.hoverred};
  }
  @media screen and (min-width: 500px) {
    width: 173px;
  }
`;

export const Loadmore = styled.button`
  margin-bottom: 80px;
  display: block;
  width: 145px;
  height: 56px;
  border-radius: 28px;
  border: solid 1px ${theme.colors.transblack};
  text-decoration: none;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease 0s;

  :hover,
  :active,
  :focus {
    border: solid 1px ${theme.colors.red};
  }
`;

export const Towninput = styled.select`
  margin-bottom: 32px;
  width: 280px;
  height: 56px;
  border-radius: 10px;
  padding-left: 48px;

  padding-top: 3px;
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  appearance: none;

  &::placeholder {
    color: ${theme.colors.transblack};
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }
  background: ${theme.colors.lightgrey} url(${pin_a}) no-repeat;
  background-size: 20px;
  background-position: 18px 50%;

  :hover,
  :focus,
  :active {
    background: ${theme.colors.lightgrey} url(${pin}) no-repeat;
    background-size: 20px;
    background-position: 18px 50%;

    outline: none;
  }

  @media screen and (min-width: 836px) {
    width: 320px;
  }

  @media screen and (min-width: 1080px) {
    width: 280px;
  }
  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`;

export const Option = styled.option`
  font-size: 16px;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  padding: 10px 15px;
  border: none;
  cursor: pointer;

  & selected {
    background-color: ${theme.colors.red};
    color: #fff;
  }
`;
