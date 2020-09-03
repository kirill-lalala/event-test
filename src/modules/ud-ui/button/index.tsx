import React, { FunctionComponent, MouseEvent } from 'react';
import cn from 'classnames';
import * as S from './styles';
import { IconNames } from '../icon/types';
import Icon from '../icon';

type UDButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: string;
  theme: 'action' | 'outline';
  className?: string;
  icon?: IconNames;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const UDButton: FunctionComponent<UDButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    icon,
    type = 'button',
    ...otherProps
  } = props;
  const btnClassName = cn(className, theme, {});

  return (
    <S.Button className={btnClassName} type={type} {...otherProps}>
      {icon && <Icon name={icon} className={'mr-3'} />}
      {children}
    </S.Button>
  );
};

export default UDButton;
