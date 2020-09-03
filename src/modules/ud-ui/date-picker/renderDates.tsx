import React from 'react';
import { WrappedFieldArrayProps } from 'redux-form';
import UDDatePicker from '.';
import UDButton from '../button';
import AddedDate from './added';

type RenderMemberProps = {} & WrappedFieldArrayProps;

const renderDates = (props: RenderMemberProps) => {
  const { fields } = props;
  return (
    <>
      {fields.map((member, index) => (
        <AddedDate
          onClick={() => fields.remove(index)}
          member={member}
          key={member}
        />
      ))}
      <UDDatePicker className={'mb-8'} />
      <UDButton
        theme={'outline'}
        onClick={() => fields.push({})}
        type={'button'}
        className={'mb-13'}
      >
        + Добавить дату
      </UDButton>
    </>
  );
};

export default renderDates;
