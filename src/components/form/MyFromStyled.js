import styled from '@emotion/styled';
import { theme } from 'styles/Theme';
import svg from '../../img/calend.svg';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* styles dropdownCalendar */
  & .react-datepicker__header {
    background: white;
    border-bottom: 0;
  }
  .react-datepicker {
    border: 1px solid ${theme.colors.transblack};
    border-radius: 12px;
    padding: 16px;
    width: 325px;
  }
  .react-datepicker__month-container {
    float: none;
  }
  .react-datepicker__month {
    margin: 0;
    text-align: center;
    width: 293px;
  }
  .react-datepicker__day-names {
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 6px;
    justify-content: space-between;
    display: flex;
    text-transform: uppercase;
  }
  .react-datepicker__week {
    white-space: nowrap;
    justify-content: space-between;
    display: flex;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 20px;
  }
  .react-datepicker__navigation--next {
    top: 20px;
  }
  .react-datepicker__navigation--previous {
    top: 20px;
  }
  .react-datepicker__navigation-icon::before {
    border-color: black;
    border-radius: 12%;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${theme.colors.gray};
  }
  .react-datepicker__day--selected {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
  }
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

  overflow: hidden;
  padding-bottom: 24px;
  @media screen and (min-width: 500px) {
    white-space: nowrap;
  }
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

export const DateInput = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background-color: ${theme.colors.lightgrey};
  margin-bottom: 14px;
  background-image: url(${svg});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 95%;
  input {
    background-position: right 20px center;
    width: 100%;
    height: 56px;
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
