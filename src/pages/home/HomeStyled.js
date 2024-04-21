import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import van_pic from '../../img/ai2.jpg';
// import van_pic from '../../img/van1.jpg';
import { Link } from 'react-router-dom';

export const Hero = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  color: ${theme.colors.gray};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  height: 700px;
  padding-left: 364px;
  padding-right: 64px;
  border-radius: 20px;
  background-size: cover;
  background-image: url(${van_pic});
  /* background-position: 16%; */

  background-color: ${theme.colors.red};
  p {
    max-width: 500px;
    padding-top: 90px;
    color: ${theme.colors.black};
    padding-bottom: 20px;
  }
`;
export const Logo = styled.h2`
  font-weight: 900;
  font-size: 60px;
  line-height: 24px;
  color: ${theme.colors.black};
  padding-top: 125px;
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
