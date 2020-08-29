import React, { useCallback } from 'react';
import { WrappedFieldProps } from 'redux-form';
import * as S from './styles';
import { useDropzone } from 'react-dropzone';
import Icon from 'src/modules/ud-ui/icon';

type UDDropZoneProps = {
  required?: boolean;
  title?: string;
} & WrappedFieldProps;

const UDDropZone = (props: UDDropZoneProps) => {
  const { meta, input, title, ...otherProps } = props;
  const { value, onChange } = input;

  const onDrop = useCallback((files) => {
    if (files.length) {
      const [file] = files;
      const reader = new FileReader();

      reader.onload = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <S.Wrap {...otherProps}>
      <S.Container {...getRootProps()}>
        <input {...getInputProps()} />
        <Icon name={'camera'} />
        {value && <img src={value} />}
      </S.Container>
      {title && <S.Description>{title}</S.Description>}
    </S.Wrap>
  );
};

export default UDDropZone;
