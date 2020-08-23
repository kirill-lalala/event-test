import React, { useRef, FunctionComponent } from 'react';
import cn from 'classnames';
import * as S from './styles';
import { reduxForm, InjectedFormProps, FormProps } from 'redux-form';
import { nanoid } from 'nanoid';

interface ControlWrapperProps extends FormProps {
  label: string;
}

const UDFormComponentsControlWrapper = (Component: any): FunctionComponent => (
  props
) => {
  const { meta, label, ...otherProps } = props;
  const { touched, valid, error } = meta;

  const showError = touched && !!error;
  const isSuccess = touched && valid;

  const [fieldId] = React.useState(nanoid);

  return (
    <S.WrapperContainer>
      {label && <S.Label htmlFor={fieldId}>{label}</S.Label>}
      <S.ControlContainer>
        <Component
          {...otherProps}
          id={fieldId}
          meta={meta}
          isHaveError={showError}
        />
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
