import styled from 'styled-components';

export const Container = styled.div<{ required?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 126px;
  background: ${({ theme }) => theme.lightColor};
  border: ${({ required }) => (required ? 4 : 1)}px solid
    ${({ theme }) => theme.borderField};
  border-radius: 4px;
`;

export const Wrap = styled.div`
  position: relative;
  width: 126px;
`;

export const Description = styled.p`
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme }) => theme.baseColor};
  opacity: 0.7;
  margin-top: 12px;
`;

export const Cross = styled.div`
  position: absolute;
  right: -14px;
  top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.dark};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;
