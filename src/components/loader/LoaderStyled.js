import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

export const Load = styled.div`
  margin: 0 auto;
  width: 120px;
  height: 7px;
  background: linear-gradient(${theme.colors.red} 0 0) left -40px top 0/40px 20px,
    linear-gradient(${theme.colors.lightgrey} 0 0) center/100% 50%;
  background-repeat: no-repeat;
  animation: l5 1s infinite linear;

  @keyframes l5 {
    100% {
      background-position: right -40px top 0, center;
    }
  }
`;
