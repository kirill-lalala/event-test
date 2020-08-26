import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import * as S from './styles';
import isLastItem from 'src/modules/helpers/lastItem';
import Icon from '../icon';
import { IconNames } from '../icon/types';
import { Contacts, ContactsProps } from './types';

const contacts: Contacts = [
  { label: 'mail', data: 'info@zelfi.com', icon: 'envelope' },
  { label: 'telegram', data: 'Подписаться на рассылку', icon: 'telegram' },
];

const UDContacts: FunctionComponent<ContactsProps> = (props) => {
  const { showing } = props;
  const showingContacts = contacts.filter((contact) =>
    showing.includes(contact.label)
  );
  return (
    <>
      <ul>
        {showingContacts.map((contact, index) => {
          const liMargin = cn({
            'mb-6': !isLastItem(showingContacts, index),
          });
          const liClassName = ['d-flex align-items-center', liMargin]
            .filter(Boolean)
            .join(' ');
          return (
            <S.Li className={liClassName}>
              <Icon name={contact.icon} className={'mr-3'} />
              <a href="#">{contact.data}</a>
            </S.Li>
          );
        })}
      </ul>
    </>
  );
};

export default UDContacts;
