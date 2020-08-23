import React, { useCallback } from 'react';
import { WrappedFieldProps } from 'redux-form';
import * as S from './styles';

type UDTextFieldProps = {
} & WrappedFieldProps;

const UDTextAreaField = (props: UDTextFieldProps) => {
  const { input } = props;
  return (
    <S.InputWrap >
      <S.TextArea {...input} className={'fieldTheme'} />
    </S.InputWrap>
  );
};

export default UDTextAreaField;
