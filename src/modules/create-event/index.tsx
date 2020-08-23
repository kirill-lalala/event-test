import React, { FunctionComponent } from 'react';
import Header from '../header';
import * as S from './styles';
import { MainTitle } from '../ud-ui/main-title/styles';
import { Main } from '../ud-ui/main/styles';
import { Form, reduxForm, Field } from 'redux-form';
import Title from 'src/modules/ud-ui/title';
import UDFormDateRangePicker from '../ud-ui/form/ui/components/text-field';

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
              <Field component={UDFormDateRangePicker} />
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
