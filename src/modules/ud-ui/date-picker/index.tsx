import React, { FunctionComponent, useEffect } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { Field, formValueSelector, initialize } from 'redux-form';
import {
  UDFormDatePickerField,
  UDFormTimePickerField,
} from 'src/modules/ud-ui/form/ui/components/date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { ClassNameList } from 'react-select';

type DatePickerProps = {
  separatorSize?: 'big' | 'small';
  className?: string;
};

const selector = formValueSelector('createEvent');

registerLocale('ru', ru);
setDefaultLocale('ru');

const UDDatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const { separatorSize = 'big', className } = props;
  const currentDate = new Date();

  const startDate =
    useSelector((state) => selector(state, 'startDate')) || currentDate;
  const startTime =
    useSelector((state) => selector(state, 'startTime')) || currentDate;
  const endDate =
    useSelector((state) => selector(state, 'endDate')) || currentDate;
  const endTime =
    useSelector((state) => selector(state, 'endTime')) || currentDate;

  const isSameDate = startDate?.toDateString() === endDate?.toDateString();
  const isToday = currentDate.toDateString() === startDate?.toDateString();

  const minStartTime = isToday
    ? setHours(
        setMinutes(currentDate, currentDate.getMinutes()),
        currentDate.getHours()
      )
    : setHours(setMinutes(currentDate, 0), 0);

  const minEndTime: Date = isSameDate
    ? setHours(
        setMinutes(currentDate, startTime?.getMinutes()),
        startTime?.getHours()
      )
    : setHours(setMinutes(currentDate, 0), 0);

  return (
    <div className={className}>
      <S.DateWrap>
        <div className={'mr-5 w-100'}>
          <Field
            component={UDFormDatePickerField}
            name={'startDate'}
            label={'Дата начала'}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            minDate={startDate}
          />
        </div>

        <Field
          component={UDFormTimePickerField}
          name={'startTime'}
          label={'Время начала'}
          selected={startTime}
          minTime={minStartTime}
          maxTime={setHours(setMinutes(startDate, 59), 23)}
        />

        <S.HorizontalSeparator size={separatorSize} />

        <div className={'mr-5 w-100'}>
          <Field
            component={UDFormDatePickerField}
            name={'endDate'}
            label={'Дата окончания'}
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>

        <Field
          component={UDFormTimePickerField}
          name={'endTime'}
          label={'Время окончания'}
          selected={endTime}
          minTime={minEndTime}
        />
      </S.DateWrap>
    </div>
  );
};

export default UDDatePicker;
