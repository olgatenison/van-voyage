import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import van_pic from '../../img/van1.jpg';

export const Hero = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  color: ${theme.colors.gray};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 700px;
  padding-left: 64px;
  padding-right: 64px;
  border-radius: 20px;
  background-size: cover;
  background-image: url(${van_pic});
  background-position: 16%;
  background-color: ${theme.colors.red};
`;
