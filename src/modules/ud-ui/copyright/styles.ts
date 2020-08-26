import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.copyrightBg};
`;

export const Year = styled.p`
  color: #ffffff;
  font-size: 16px;
  opacity: 0.5;
`;

export const Make = styled.p`
  font-size: 12px;
  color: #ffffff;
`;

export const Logo = styled.div`
  opacity: 0.5;
`;
