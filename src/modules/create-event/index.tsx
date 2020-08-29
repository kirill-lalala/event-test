import React, { FunctionComponent } from 'react';
import Header from '../header';
import * as S from './styles';
import { MainTitle } from '../ud-ui/main-title/styles';
import { Main } from '../ud-ui/main/styles';
import { Form, reduxForm, Field, FormSection } from 'redux-form';
import Title from 'src/modules/ud-ui/title';
import UDFormTextField from '../ud-ui/form/ui/components/text-field';
import UDFormTextAreaField from '../ud-ui/form/ui/components/textarea-field';
import UDDatePicker from '../ud-ui/date-picker';
import UDFormSelectField from '../ud-ui/form/ui/components/select';
import UDButton from '../ud-ui/button';
import Footer from '../footer';
import { Label } from '../ud-ui/form/ui/control-wrapper/styles';
import UDDropZone from '../ud-ui/form/ui/components/drop-zone/control';
import UDPhotos from '../ud-ui/photos';

type CreateEventProps = {};

const categoriesOptions = [
  { value: 'birthday', label: 'День рождения' },
  { value: 'wedding', label: 'Свадьба' },
  { value: 'corporate', label: 'Корпоратив' },
];

const ratingOptions = [
  { value: 'zero', label: '0+' },
  { value: 'six', label: '6+' },
  { value: 'twelve', label: '12+' },
  { value: 'sixteen', label: '16+' },
  { value: 'eighteen', label: '18+' },
];

const CreateEvent: FunctionComponent<CreateEventProps> = (props) => {
  return (
    <div>
      <Header />
      <div className="container pt-31">
        <S.Main>
          <MainTitle>Создать мероприятие</MainTitle>
          <Main className="mb-33">
            <Form>
              <Title>Информация об организаторе</Title>
              <Field
                label={'Организатор'}
                component={UDFormTextField}
                name="organizer"
                classNameWrap="mb-10"
              />

              <Title>Контактные данные</Title>
              <S.Fields className={'mb-10'}>
                <Field
                  label={'Телефон'}
                  component={UDFormTextField}
                  name="organizer"
                  classNameWrap={'mr-5 w-100'}
                />
                <Field
                  label={'E-mail'}
                  component={UDFormTextField}
                  name="organizer"
                  classNameWrap={'mr-5 w-100'}
                />
                <Field
                  label={'Город организатора'}
                  component={UDFormTextField}
                  name="organizer"
                  classNameWrap={'w-100'}
                />
              </S.Fields>

              <Title>Общая информация</Title>
              <Field
                label={'Название'}
                component={UDFormTextField}
                name="organizer"
                classNameWrap={'mb-10'}
              />

              <FormSection name="photos">
                <UDPhotos />
              </FormSection>

              <Field
                label={'Видео (ссылка)'}
                component={UDFormTextField}
                name="organizer"
                classNameWrap={'mb-10'}
                icon={'url'}
              />

              <Field
                label={'Подробное описание'}
                component={UDFormTextAreaField}
                name="organizer"
                classNameWrap={'mb-12'}
              />

              <UDDatePicker />

              <S.Fields className={'mb-12'}>
                <Field
                  label={'Категория'}
                  component={UDFormSelectField}
                  name="category"
                  options={categoriesOptions}
                  className={'mr-4'}
                />
                <Field
                  label={'Рейтинг мероприятия'}
                  // defaultValue={ratingOptions[0]}
                  component={UDFormSelectField}
                  name="rating"
                  options={ratingOptions}
                />
              </S.Fields>

              <S.Fields className={'mb-17'}>
                <Field
                  label={'Адрес мероприятия'}
                  component={UDFormTextField}
                  name="address"
                  className={'mr-4'}
                />
                <Field
                  label={'Комментарий к адресу'}
                  component={UDFormTextField}
                  name="comment"
                />
              </S.Fields>

              <S.FormButtons>
                <UDButton theme={'outline'} className={'mr-5 w-25'}>
                  Отменить
                </UDButton>
                <UDButton theme={'action'} className={'w-25'}>
                  Далее
                </UDButton>
              </S.FormButtons>
            </Form>
          </Main>
        </S.Main>
      </div>
      <Footer />
    </div>
  );
};

const FORM_NAME = 'createEvent';

export default reduxForm({
  form: FORM_NAME,
})(CreateEvent);
