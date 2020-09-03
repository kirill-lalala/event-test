import styled from 'styled-components';

export const Cross = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.dark};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;
