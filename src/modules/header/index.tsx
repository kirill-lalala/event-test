import React from 'react';
import * as S from './styles';
import Navigation from 'src/modules/ud-ui/header-navigation';
import UDButton from 'src/modules/ud-ui/button';

const NAVIGATION_ITEMS = ['Мероприятия', 'О сервисе', 'Рейтинг'];

const Header = () => {
  return (
    <S.Wrap>
      <div className="container">
        <div className="pt-7 d-flex justify-content-between">
          <Navigation items={NAVIGATION_ITEMS} />
          <S.RightBlock>
            <div className={'mr-12'}>icon</div>
            <UDButton theme={'action'} className={'mr-5'}>
              Создать мероприятие
            </UDButton>
            <UDButton theme={'outline'} icon={'profile'}>
              Иванов Иван
            </UDButton>
          </S.RightBlock>
        </div>
      </div>
    </S.Wrap>
  );
};

export default Header;
