import React from 'react';
import * as S from './styles';

type Props = {
  items: string[];
};

const Navigation = (props: Props) => {
  const { items } = props;
  return (
    <S.NavigationWrap>
      <S.Navigation>
        <S.List>
          {items.map((item) => (
            <S.ListItem>{item}</S.ListItem>
          ))}
        </S.List>
      </S.Navigation>
    </S.NavigationWrap>
  );
};

export default Navigation;
