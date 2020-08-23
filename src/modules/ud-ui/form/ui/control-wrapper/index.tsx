import React, { useRef, FunctionComponent, useState } from 'react';
import cn from 'classnames';
import * as S from './styles';
import { WrappedFieldProps, FormProps } from 'redux-form';
import { nanoid } from 'nanoid';

type ControlWrapperProps = {
  label: string;
  classNameWrap: string;
} & WrappedFieldProps;

const UDFormComponentsControlWrapper = (
  Component: any
): React.FC<ControlWrapperProps> => (props) => {
  // const [fieldId] = useState('nanoid()');
  const { meta, label, classNameWrap, ...otherProps } = props;
  const { touched, valid, error } = meta;

  const showError = touched && !!error;
  const isSuccess = touched && valid;

  return (
    <S.WrapperContainer className={classNameWrap}>
      {label && <S.Label>{label}</S.Label>}
      <S.ControlContainer>
        <Component {...otherProps} meta={meta} isHaveError={showError} />
      </S.ControlContainer>
      {/* {showError && (
        <ErrorsContainer>
          {error &&
            !!error.length &&
            error.map((error: string) =>
              !!error ? (
                <FieldError key={getInputId('error')}>
                  <Icon
                    name="alert-triangle"
                    alt="alert icon"
                    className="mr-2"
                  />
                  {error}
                </FieldError>
              ) : null
            )}
        </ErrorsContainer>
      )} */}
    </S.WrapperContainer>
  );
};

export default UDFormComponentsControlWrapper;
