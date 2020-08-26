import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import * as S from './styles';
import Icon from '../icon';

type CopyrightProps = {};

const UDCopyright: FunctionComponent<CopyrightProps> = (props) => {
  return (
    <S.Wrap>
      <div className="container d-flex justify-content-between">
        <S.Year>&copy; 2020</S.Year>
        <S.Logo className="d-flex align-items-center">
          <S.Make className="mr-2">Сделано в</S.Make>
          <Icon name="logo" />
        </S.Logo>
      </div>
    </S.Wrap>
  );
};

export default UDCopyright;
