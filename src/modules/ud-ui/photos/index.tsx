import React, { FunctionComponent } from 'react';
import * as S from './styles';
import { Label } from '../form/ui/control-wrapper/styles';
import { Field, formValueSelector } from 'redux-form';
import { useSelector } from 'react-redux';
import { UDDropZoneField } from '../form/ui/components/drop-zone';

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
        <div className={'mr-5'}>
          <Field
            name={'mainPhoto'}
            component={UDDropZoneField}
            title={'Главная фотография (обложка мероприятия)'}
            errorStyles={{ width: '126px', position: 'initial' }}
            required
          />
        </div>
        <div className={'mr-5'}>
          <Field
            name={'eventPhoto'}
            component={UDDropZoneField}
            title={'Фотография для карточки мероприятия'}
            errorStyles={{ width: '126px', position: 'initial' }}
            required
          />
        </div>
        <div>
          <Field name={'additionalPhoto1'} component={UDDropZoneField} />
        </div>
        {photosLength >= 3 && (
          <div className={'mr-5 ml-5'}>
            <Field name={'additionalPhoto2'} component={UDDropZoneField} />
          </div>
        )}
        {photosLength >= 4 && (
          <div>
            <Field name={'additionalPhoto3'} component={UDDropZoneField} />
          </div>
        )}
      </S.PhotosWrap>
    </div>
  );
};

export default UDPhotos;
