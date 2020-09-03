import React, { useCallback } from 'react';
import { change, WrappedFieldProps } from 'redux-form';
import * as S from './styles';
import { useDropzone } from 'react-dropzone';
import Icon from 'src/modules/ud-ui/icon';
import { useDispatch } from 'react-redux';
import { Cross } from 'src/modules/ud-ui/cross/styles';

type UDDropZoneProps = {
  required?: boolean;
  title?: string;
} & WrappedFieldProps;

const UDDropZone = (props: UDDropZoneProps) => {
  const { meta, input, title, required, ...otherProps } = props;
  const { value, onChange, name } = input;
  const { form } = meta;

  const dispatch = useDispatch();

  const onDrop = useCallback(
    (files) => {
      if (files.length) {
        const [file] = files;
        const reader = new FileReader();

        reader.onload = () => {
          onChange(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const onCrossClick = useCallback(() => {
    dispatch(change(form, name, ''));
  }, [dispatch, form, name]);

  return (
    <S.Wrap {...otherProps}>
      {value && <S.Cross onClick={onCrossClick}></S.Cross>}
      <S.Container {...getRootProps()} required={required}>
        <input {...getInputProps()} />
        {value ? (
          <img src={value} style={{ width: '100%', height: '100%' }} />
        ) : (
          isDragActive || <Icon name={'camera'} />
        )}
      </S.Container>
      {title && <S.Description>{title}</S.Description>}
    </S.Wrap>
  );
};

export default UDDropZone;
