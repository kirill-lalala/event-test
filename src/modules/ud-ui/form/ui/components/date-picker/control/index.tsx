import React, { useCallback } from 'react';
import { WrappedFieldProps } from 'redux-form';
import * as S from './styles';
import ReactDatePicker from 'react-datepicker';

const CustomInput = ({ value, onClick }: any) => {
  return <S.CustomInput type={'button'} onClick={onClick}>
    {value}
  </S.CustomInput>
};

type UDDatePickerProps = {
} & WrappedFieldProps;

const UDDatePickerField = (props: UDDatePickerProps) => {
  const { input, ...otherProps } = props;
  return (
    <ReactDatePicker
      {...input}
      {...otherProps}
      customInput={<CustomInput />}
    />
  );
};

export default UDDatePickerField;
