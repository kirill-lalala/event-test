import React from 'react';
import * as S from './styles';
import UDLists from '../ud-ui/lists';
import UDContacts from '../ud-ui/contacts';
import UDSocial from '../ud-ui/social';
import UDCopyright from '../ud-ui/copyright';

const columns = [
  ['Мероприятия', 'О сервисе'],
  ['Партнерам', 'Рейтинг', 'Контакты'],
];

const Footer = () => {
  return (
    <footer>
      <S.Wrap>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <UDLists lists={columns} />
            </div>
            <div className="d-flex">
              <div className={'mr-11'}>
                <UDContacts showing={['mail', 'telegram']} />
              </div>
              <div>
                <UDSocial />
              </div>
            </div>
          </div>
        </div>
      </S.Wrap>
      <UDCopyright />
    </footer>
  );
};

export default Footer;
