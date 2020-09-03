import React, { FunctionComponent } from 'react';
import UDDatePicker from '..';
import * as S from './styles';

type AddedDateProps = {
  onClick: () => void;
};

const AddedDate: FunctionComponent<AddedDateProps> = (props) => {
  const { onClick } = props;
  return (
    <S.Wrap className={'mb-10'}>
      <S.Cross onClick={onClick} />
      <UDDatePicker separatorSize={'small'} />
    </S.Wrap>
  );
};

export default AddedDate;
