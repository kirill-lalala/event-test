import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import * as S from './styles';
import { IconNames } from '../icon/types';
import Icon from '../icon';

type UDButtonProps = {
  children: string;
  theme: 'action' | 'outline';
  className?: string;
  icon?: IconNames;
};

const UDButton: FunctionComponent<UDButtonProps> = (props) => {
  const { children, className, theme, icon } = props;
  const btnClassName = cn(className, theme, {});

  return (
    <S.Button className={btnClassName}>
      {icon && <Icon name={icon} className={'mr-3'} />}
      {children}
    </S.Button>
  );
};

export default UDButton;
