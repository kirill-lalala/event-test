import React, { FunctionComponent } from 'react';
import Header from '../header';
import * as S from './styles';
import { MainTitle } from '../ud-ui/main-title/styles';
import { Main } from '../ud-ui/main/styles';
import { Form, reduxForm, Field } from 'redux-form';
import Title from 'src/modules/ud-ui/title';
import UDFormTextField from '../ud-ui/form/ui/components/text-field';
import UDFormTextAreaField from '../ud-ui/form/ui/components/textarea-field';
import UDDatePicker from '../ud-ui/date-picker';

type CreateEventProps = {};

const CreateEvent: FunctionComponent<CreateEventProps> = (props) => {
  return (
    <div>
      <Header />
      <div className="container pt-31">
        <S.Main>
          <MainTitle>Создать мероприятие</MainTitle>
          <Main>
            <Form>
              <Title>Информация об организаторе</Title>
              <Field
                label={'Организатор'}
                component={UDFormTextField}
                name="organizer"
                classNameWrap={'mb-10'}
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

              <Title>Фотографии</Title>

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
            </Form>
          </Main>
        </S.Main>
      </div>
    </div>
  );
};

const FORM_NAME = 'createEvent';

export default reduxForm({
  form: FORM_NAME,
})(CreateEvent);
