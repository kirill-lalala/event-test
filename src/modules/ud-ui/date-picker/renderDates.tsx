import React from 'react';
import { WrappedFieldArrayProps, FieldIterate } from 'redux-form';
import UDDatePicker from '.';
import UDButton from '../button';
import AddedDate from './added';

type RenderMemberProps = {} & WrappedFieldArrayProps;

const renderDates = (props: RenderMemberProps) => {
  const {
    fields,
    // meta: { error, submitFailed },
  } = props;
  return (
    <>
      {fields.map((member, index) => (
        <AddedDate onClick={() => fields.remove(index)} />
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
      {/* {submitFailed && error && <span>{error}</span>} */}
    </>
  );
};

export default renderDates;
