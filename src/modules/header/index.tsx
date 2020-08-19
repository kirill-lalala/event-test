import React from 'react';
import * as S from './styles';
import Navigation from 'src/modules/ud/ui/header-navigation';

const NAVIGATION_ITEMS = ['Мероприятия', 'О сервисе', 'Рейтинг'];

const Header = () => {
  return (
    <div className="container">
      <div className="row pt-7 d-flex justify-content-between">
        <Navigation items={NAVIGATION_ITEMS} />
        <div>Иванов Иван</div>
      </div>
    </div>
  );
};

export default Header;
