import React, { FunctionComponent } from 'react';
import Header from '../header';
import * as S from './styles';
import { MainTitle } from '../ud-ui/main-title/styles';

type CreateEventProps = {};

const CreateEvent: FunctionComponent<CreateEventProps> = (props) => {
  return (
    <div>
      <Header />
      <S.Main>
        <div className="container pt-31">
          <MainTitle>Создать мероприятие</MainTitle>
        </div>
      </S.Main>
    </div>
  );
};

export default CreateEvent;
