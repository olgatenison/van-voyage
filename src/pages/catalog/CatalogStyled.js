import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import pin from '../../img/map-pin.svg';
import pin_a from '../../img/map-pin-p.svg';

export const CatalogSection = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 0 64px;
  gap: 64px;
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
  gap: 32px;
`;

export const Subtitle = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.gray};
  padding-bottom: 14px;
`;

export const Redbutton = styled.button`
  display: block;
  width: 173px;
  height: 56px;
  border-radius: 28px;
  text-decoration: none;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease 0s;

  :hover,
  :active,
  :focus {
    background-color: ${theme.colors.hoverred};
  }
`;

export const Loadmore = styled.button`
  margin-top: 18px;
  margin-bottom: 50px;
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

export const Towninput = styled.input`
  margin-bottom: 32px;
  width: 360px;
  height: 56px;
  border-radius: 10px;
  padding-left: 48px;
  padding-top: 3px;
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
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
`;
