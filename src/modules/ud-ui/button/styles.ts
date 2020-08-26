import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: none;
  padding-top: 19px;
  padding-bottom: 19px;
  font-size: 16px;
  font-weight: 600;
  &.action {
    background: ${({ theme }) => theme.buttonColorDark};
    padding-right: 47px;
    padding-left: 47px;
    color: ${({ theme }) => theme.buttonColorLight};
  }
  &.outline {
    padding-right: 16px;
    padding-left: 16px;
    color: ${(props) => props.theme.baseColor};
    background-color: ${({ theme }) => theme.buttonColorLight};
    border: 1px solid ${({ theme }) => theme.buttonColorDark};
  }
`;
