import React from 'react';
import styled from 'styled-components';

export const NavigationWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.baseColor};
`;

export const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 40px;
  }
`;
