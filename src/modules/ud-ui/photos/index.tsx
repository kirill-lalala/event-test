import React, { FunctionComponent } from 'react';
import * as S from './styles';
import { Label } from '../form/ui/control-wrapper/styles';
import { Field } from 'redux-form';
import UDDropZone from '../form/ui/components/drop-zone/control';

type PhotosProps = {};

const UDPhotos: FunctionComponent<PhotosProps> = (props) => {
  return (
    <div className={'mb-8'}>
      <S.PhotoLabel className={'mb-6'}>
        <Label className={'mr-1'}>Фотографии</Label>
        (не более 5 файлов)
      </S.PhotoLabel>

      <S.PhotosWrap>
        <Field
          name={'photo'}
          component={UDDropZone}
          className={'mr-5'}
          title={'Главная фотография (обложка мероприятия)'}
          required
        />
        <Field
          name={'photo'}
          component={UDDropZone}
          className={'mr-5'}
          title={'Фотография для карточки мероприятия'}
          required
        />
        <Field name={'photo'} component={UDDropZone} className={'mr-5'} />
      </S.PhotosWrap>
    </div>
  );
};

export default UDPhotos;
