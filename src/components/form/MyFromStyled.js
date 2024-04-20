import styled from '@emotion/styled';
import { theme } from 'styles/Theme';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormikTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${theme.colors.black};
  padding-bottom: 3px;
`;

export const DescriptionForm = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.gray};
  white-space: nowrap;
  overflow: hidden;
  padding-bottom: 24px;
`;

export const ThinInput = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: ${theme.colors.lightgrey};
  margin-bottom: 14px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    color: ${theme.colors.black};

    ::placeholder {
      top: 65%;
      color: ${theme.colors.grey};
      font-size: 16px;
      font-weight: 400;
      pointer-events: none;
      transition: transform 0.3s ease;
    }
  }
`;

export const BigInput = styled.div`
  width: 100%;
  min-height: 115px;
  border-radius: 10px;
  background-color: ${theme.colors.lightgrey};
  margin-bottom: 24px;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;
    padding: 8px 16px;
    box-sizing: border-box;
    background-color: transparent;
    font-size: 16px;
    color: ${theme.colors.black};

    ::placeholder {
      top: 65%;
      color: ${theme.colors.grey};
      font-size: 16px;
      font-weight: 400;
      pointer-events: none;
      transition: transform 0.3s ease;
    }
  }
`;
