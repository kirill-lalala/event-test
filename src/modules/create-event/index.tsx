import React, { FunctionComponent } from 'react';
import Header from '../header';
import * as S from './styles';
import { MainTitle } from '../ud-ui/main-title/styles';
import { Main } from '../ud-ui/main/styles';
import {
  Form,
  reduxForm,
  Field,
  FormSection,
  FieldArray,
  InjectedFormProps,
} from 'redux-form';
import Title from 'src/modules/ud-ui/title';
import UDFormTextField from '../ud-ui/form/ui/components/text-field';
import UDFormTextAreaField from '../ud-ui/form/ui/components/textarea-field';
import UDFormSelectField from '../ud-ui/form/ui/components/select';
import UDButton from '../ud-ui/button';
import Footer from '../footer';
import UDPhotos from '../ud-ui/photos';
import renderDates from '../ud-ui/date-picker/renderDates';
import validate from './validator';

interface StateProps {}

interface CreateEventProps extends StateProps {}

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

const FORM_NAME = 'createEvent';

const CreateEvent: FunctionComponent<
  CreateEventProps & InjectedFormProps<{}, CreateEventProps>
> = (props) => {
  const { handleSubmit, submitting, reset, pristine } = props;

  return (
    <div>
      <Header />
      <div className="container pt-31">
        <S.Main>
          <MainTitle>Создать мероприятие</MainTitle>
          <Main className="mb-33">
            <Form onSubmit={handleSubmit}>
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
                  name="phone"
                  classNameWrap={'mr-5 w-100'}
                />
                <Field
                  label={'E-mail'}
                  component={UDFormTextField}
                  name="email"
                  classNameWrap={'mr-5 w-100'}
                />
                <Field
                  label={'Город организатора'}
                  component={UDFormTextField}
                  name="city"
                  classNameWrap={'w-100'}
                />
              </S.Fields>

              <Title>Общая информация</Title>
              <Field
                label={'Название'}
                component={UDFormTextField}
                name="eventName"
                classNameWrap={'mb-10'}
              />

              <FormSection name="photos">
                <UDPhotos />
              </FormSection>

              <Field
                label={'Видео (ссылка)'}
                component={UDFormTextField}
                name="videoRef"
                classNameWrap={'mb-10'}
                icon={'url'}
              />

              <Field
                label={'Подробное описание'}
                component={UDFormTextAreaField}
                name="detailedDescription"
                classNameWrap={'mb-12'}
              />

              <FieldArray name={'dates'} component={renderDates} />

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
                  defaultValue={ratingOptions[0]}
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
                <UDButton
                  theme={'outline'}
                  type={'button'}
                  className={'mr-5 w-25'}
                  onClick={reset}
                  disabled={pristine || submitting}
                >
                  Отменить
                </UDButton>
                <UDButton
                  theme={'action'}
                  className={'w-25'}
                  type={'submit'}
                  disabled={submitting}
                >
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

export default reduxForm<{}, CreateEventProps, string>({
  form: FORM_NAME,
  onSubmit: () => {},
  validate,
  onSubmitFail: () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    alert('Упс, Кажется произошла ошибка');
  },
  onSubmitSuccess: () => {
    alert(
      'Валидные данные! Но кажется произошла ошибка с загрузкой второй страницы, мы уже разбираемся с этой проблемой'
    );
  },
})(CreateEvent);
