import React from 'react';
import * as S from './styles';
import { WrappedFieldProps } from 'redux-form';

type ControlWrapperProps = {
  label?: string;
  classNameWrap?: string;
  errorStyles?: object;
} & WrappedFieldProps;

const UDFormComponentsControlWrapper = (
  Component: any
): React.FC<ControlWrapperProps> => (props) => {
  const { meta, label, classNameWrap, errorStyles, ...otherProps } = props;
  const { touched, error } = meta;

  const showError = touched && !!error;

  return (
    <S.WrapperContainer className={classNameWrap}>
      {label && <S.Label>{label}</S.Label>}
      <S.ControlContainer>
        <Component {...otherProps} meta={meta} isHaveError={showError} />
      </S.ControlContainer>
      {showError && (
        <div style={{ position: 'absolute', color: 'red', ...errorStyles }}>
          {error}
        </div>
      )}
    </S.WrapperContainer>
  );
};

export default UDFormComponentsControlWrapper;
