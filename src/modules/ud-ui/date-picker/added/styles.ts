import { CrossProps } from './../../cross/index';
import styled from 'styled-components';
import UDCross from 'src/modules/ud-ui/cross';

export const Wrap = styled.div`
  position: relative;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.dateBg};
`;

export const Cross = styled(UDCross)<CrossProps>`
  position: absolute;
  right: -14px;
  top: -15px;
`;
