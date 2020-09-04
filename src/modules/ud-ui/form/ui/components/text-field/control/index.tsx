import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { IconNames } from 'src/modules/ud-ui/icon/types';
import * as S from './styles';
import Icon from 'src/modules/ud-ui/icon';

type UDTextFieldProps = {
  icon: IconNames;
} & WrappedFieldProps;

const UDTextField = (props: UDTextFieldProps) => {
  const { input, icon, ...otherProps } = props;
  return (
    <S.InputWrap {...otherProps}>
      {icon && (
        <S.IconWrap>
          <Icon name={icon} />
        </S.IconWrap>
      )}
      <S.Input {...input} className={'fieldTheme'} isIcon={!!icon} />
    </S.InputWrap>
  );
};

export default UDTextField;
