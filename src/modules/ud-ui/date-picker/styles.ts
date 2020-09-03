import styled from 'styled-components';

type HorizontalSeparatorProps = {
  size: 'big' | 'small';
};

export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  .react-datepicker-wrapper {
    width: 100% !important;
  }
`;

export const CustomInput = styled.button`
  border: 1px solid ${({ theme }) => theme.borderField};
  background-color: #ffffff;
  font-size: 16px;
  color: ${({ theme }) => theme.baseColor};
  padding: 19px 25px;
  width: 100%;
`;

export const HorizontalSeparator = styled.div<HorizontalSeparatorProps>`
  height: 2px;
  background: ${({ theme }) => theme.borderField};
  border-radius: 5px;
  min-width: ${(props) =>
    props.size === 'big' ? '55px' : props.size === 'small' ? '22px' : 'auto'};
  margin: ${(props) =>
    props.size === 'big'
      ? '0 14px -31px'
      : props.size === 'small'
      ? '0 5px -31px'
      : 'auto'};
`;
