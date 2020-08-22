import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import * as S from './styles';

type MainTitleProps = {};

const MainTitle: FunctionComponent<MainTitleProps> = (props) => {
  const { children } = props;
  return <S.MainTitle>{children}</S.MainTitle>;
};

export default MainTitle;
