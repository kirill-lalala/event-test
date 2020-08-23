import styled from 'styled-components';

type InputProps = {
  isIcon?: boolean;
}

export const Input = styled.input<InputProps>`
 ${({ isIcon }) => isIcon && 'padding-left: 60px;'}
`

export const InputWrap = styled.div`
  position: relative;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`
