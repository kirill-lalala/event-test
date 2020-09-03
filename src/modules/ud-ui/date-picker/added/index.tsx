import React, { FunctionComponent } from 'react';
import UDDatePicker from '..';
import * as S from './styles';

type AddedDateProps = {
  onClick: () => void;
  member: string;
};

const AddedDate: FunctionComponent<AddedDateProps> = (props) => {
  const { onClick, member } = props;
  return (
    <S.Wrap className={'mb-10'}>
      <S.Cross onClick={onClick} />
      <UDDatePicker separatorSize={'small'} member={member} />
    </S.Wrap>
  );
};

export default AddedDate;
