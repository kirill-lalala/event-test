import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import * as S from './styles';
import DatePicker from 'react-datepicker';
import './styles.css';

const CustomInput = ({ value, onClick, ...otherProps }: any) => {
  return (
    <S.CustomInput type={'button'} onClick={onClick} {...otherProps}>
      {value}
    </S.CustomInput>
  );
};

interface UDDatePickerProps extends WrappedFieldProps {}

export const UDDatePickerField = (props: UDDatePickerProps) => {
  const { input, ...otherProps } = props;
  const { value, ...otherInputProps } = input;
  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      customInput={<CustomInput className={'datepicker__customInput'} />}
      {...otherInputProps}
      {...otherProps}
    />
  );
};

export const UDTimePickerField = (props: UDDatePickerProps) => {
  const { input, ...otherProps } = props;
  const { value, ...otherInputProps } = input;
  return (
    <DatePicker
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeFormat="HH.mm"
      dateFormat="HH.mm"
      customInput={<CustomInput className={'timepicker__customInput'} />}
      {...otherInputProps}
      {...otherProps}
    />
  );
};
