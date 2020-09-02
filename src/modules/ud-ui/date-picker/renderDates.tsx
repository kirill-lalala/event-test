import React from 'react';
import { WrappedFieldArrayProps, FieldIterate } from 'redux-form';
import UDDatePicker from '.';
import UDButton from '../button';

type RenderMemberProps = {} & WrappedFieldArrayProps;

const renderDates = (props: RenderMemberProps) => {
  const {
    fields,
    // meta: { error, submitFailed },
  } = props;
  return (
    <>
      <UDDatePicker />
      <UDButton
        theme={'outline'}
        onClick={() => fields.push({})}
        type={'button'}
      >
        + Добавить дату
      </UDButton>
      {/* {submitFailed && error && <span>{error}</span>} */}
      {fields.map((member, index) => {
        return <div></div>;
      })}
    </>
  );
};

export default renderDates;
