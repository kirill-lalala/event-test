import React, { FunctionComponent } from 'react';
import * as S from './styles';
import Icon from '../icon';

export type CrossProps = {
  classname?: string;
  onClick: () => void;
};

const Cross: FunctionComponent<CrossProps> = (props) => {
  return (
    <S.Cross {...props}>
      <Icon name="cross" />
    </S.Cross>
  );
};

export default Cross;
