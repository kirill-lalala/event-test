import styled from 'styled-components';

export const Container = styled.div<{ required?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 126px;
  background: #f8f8fe;
  border: ${({ required }) => (required ? 4 : 1)}px solid #cdb1fb;
  border-radius: 4px;
`;

export const Wrap = styled.div`
  width: 126px;
  heihgt: 126px;
`;

export const Description = styled.p`
  font-size: 10px;
  line-height: 14px;
  color: #211536;
  opacity: 0.7;
`;
