import React, { FunctionComponent } from 'react';
import * as S from './styles';
import { Label } from '../form/ui/control-wrapper/styles';
import { Field, formValueSelector } from 'redux-form';
import UDDropZone from '../form/ui/components/drop-zone/control';
import { useSelector } from 'react-redux';

type PhotosProps = {};

const selector = formValueSelector('createEvent');

const UDPhotos: FunctionComponent<PhotosProps> = (props) => {
  const photos = useSelector((state) => selector(state, 'photos')) || {};
  const photosLength: number = Object.keys(photos).length;

  return (
    <div className={'mb-8'}>
      <S.PhotoLabel className={'mb-6'}>
        <Label className={'mr-1'}>Фотографии</Label>
        (не более 5 файлов)
      </S.PhotoLabel>

      <S.PhotosWrap className={'mb-8'}>
        <Field
          name={'mainPhoto'}
          component={UDDropZone}
          className={'mr-5'}
          title={'Главная фотография (обложка мероприятия)'}
          required
        />
        <Field
          name={'eventPhoto'}
          component={UDDropZone}
          className={'mr-5'}
          title={'Фотография для карточки мероприятия'}
          required
        />
        <Field name={'additionalPhoto1'} component={UDDropZone} />
        {photosLength >= 3 && (
          <Field
            name={'additionalPhoto2'}
            component={UDDropZone}
            className={'mr-5 ml-5'}
          />
        )}
        {photosLength >= 4 && (
          <Field name={'additionalPhoto3'} component={UDDropZone} />
        )}
      </S.PhotosWrap>
    </div>
  );
};

export default UDPhotos;
