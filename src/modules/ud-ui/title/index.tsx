import React, { FunctionComponent } from 'react';
import * as S from './styles';

type TitleProps = {};

const Title: FunctionComponent<TitleProps> = (props) => {
  const { children } = props;
  return <S.Title>{children}</S.Title>;
};

export default Title;
