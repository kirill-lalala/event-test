import styled from 'styled-components';

type HorizontalSeparatorProps = {
  type: 'big' | 'small';
}

export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  .react-datepicker-wrapper {
    width: 100% !important;
  }
`

export const CustomInput = styled.button`
  border: 1px solid ${({ theme }) => theme.borderField};
  background-color: #ffffff;
  font-size: 16px;
  color: ${({ theme }) => theme.baseColor};
  padding: 19px 25px;
  width: 100%;
`

export const HorizontalSeparator = styled.div<HorizontalSeparatorProps>`
  height: 2px;
  background: ${({ theme }) => theme.borderField};
  border-radius: 5px;
  width: ${(props) =>
    props.type === 'big' ? '55px' :
      props.type === 'small' ? '30px' : 'auto'};
  margin: ${(props) =>
    props.type === 'big' ? '0 14px' :
      props.type === 'small' ? '0 5px' : 'auto'}
`;