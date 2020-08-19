import React from 'react';
import styled from 'styled-components';

export const NavigationWrap = styled.div``;

export const Navigation = styled.nav``;

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
