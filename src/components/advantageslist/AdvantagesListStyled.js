import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

export const AdvantagesListWrapper = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const AdvantageItem = styled.li`
  background-color: ${theme.colors.lightgrey};
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  gap: 10px;
  height: 44px;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
  }
`;
