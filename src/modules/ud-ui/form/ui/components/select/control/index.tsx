import React, { useContext } from 'react';
import Select, {
  StylesConfig,
  components,
  IndicatorProps,
  OptionsType,
} from 'react-select';
import { WrappedFieldProps } from 'redux-form';
import * as S from './styles';
import { ThemeContext } from 'styled-components';
import Icon from 'src/modules/ud-ui/icon';

type UDSelectProps = {} & WrappedFieldProps;

const UDSelectField = (props: UDSelectProps) => {
  const { input, ...otherProps } = props;
  const theme = useContext(ThemeContext);

  const customStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.borderField,
      borderRadius: '4px',
      padding: '13px',
      '&:hover': {
        borderColor: theme.borderField,
      },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      paddingRight: '17px',
    }),
  };

  const DropdownIndicator = (props: IndicatorProps<any>) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon name="dropdownIndicator" />
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      styles={customStyles}
      placeholder={''}
      {...input}
      {...otherProps}
    />
  );
};

export default UDSelectField;
