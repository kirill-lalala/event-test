import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  border-radius: 4px;
  border: none;
  padding-top: 19px;
  padding-bottom: 19px;
  font-size: 16px;
  font-weight: 600;
  &.action {
    background: #9b63f8;
    padding-right: 47px;
    padding-left: 47px;
    color: #ffffff;
  }
  &.outline {
    padding-right: 16px;
    padding-left: 16px;
    color: ${(props) => props.theme.baseColor};
    background-color: #ffffff;
    border: 1px solid #9b63f8;
  }
`;
