import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import van_pic from '../../img/ai2.jpg';
import { Link } from 'react-router-dom';

export const Hero = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  color: ${theme.colors.gray};

  height: 320px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0px;
  background-size: cover;
  background-position: center;
  background-image: url(${van_pic});
  background-color: ${theme.colors.red};

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    padding-top: 270px;
    padding-bottom: 20px;
    font-size: 14px;
    color: ${theme.colors.black};
  }

  @media screen and (min-width: 500px) {
    padding-left: 64px;
    padding-right: 40px;
    margin-left: 20px;
    margin-right: 20px;
    height: 600px;
    border-radius: 20px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    p {
      max-width: 350px;
      padding-top: 65px;
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
  @media screen and (min-width: 837px) {
    height: 700px;
    padding-left: 164px;
    padding-right: 64px;
    border-radius: 20px;
    margin: 0 auto;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 1380px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    p {
      max-width: 500px;
      padding-top: 70px;
      padding-bottom: 20px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-left: 364px;
    padding-right: 64px;
    margin: 0 auto;
  }
`;

export const Logo = styled.h2`
  font-weight: 900;
  line-height: 24px;
  color: ${theme.colors.black};
  font-size: 42px;
  padding-top: 50px;

  @media screen and (min-width: 500px) and (max-width: 836px) {
    padding-top: 95px;
    font-size: 40px;
  }

  @media screen and (min-width: 837px) {
    padding-top: 85px;
    font-size: 60px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 125px;
  }
`;

export const RedbuttonHome = styled(Link)`
  display: block;
  width: 250px;
  height: 56px;
  border-radius: 28px;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${theme.colors.black};
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :active,
  :focus {
    background-color: ${theme.colors.red};
    border: 2px solid ${theme.colors.red};
  }
`;
