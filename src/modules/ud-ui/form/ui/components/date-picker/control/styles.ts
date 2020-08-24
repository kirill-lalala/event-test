import styled from 'styled-components';

export const CustomInput = styled.button`
  border: 1px solid ${({ theme }) => theme.borderField};
  background-color: #ffffff;
  font-size: 16px;
  color: ${({ theme }) => theme.baseColor};
  padding: 19px 25px;
  width: 100%;
`
