import React, { useCallback } from 'react';
import { WrappedFieldProps } from 'redux-form';
import * as S from './styles';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

const CustomInput = ({ value, onClick }: any) => {
  return (
    <S.CustomInput type={'button'} onClick={onClick}>
      {value}
    </S.CustomInput>
  );
};

interface UDDatePickerProps extends WrappedFieldProps {}

const UDDatePickerField = (props: UDDatePickerProps) => {
  const { input, ...otherProps } = props;
  const { value, ...otherInputProps } = input;
  return (
    <DatePicker
      {...otherInputProps}
      {...otherProps}
      customInput={<CustomInput />}
    />
  );
};

export default UDDatePickerField;
