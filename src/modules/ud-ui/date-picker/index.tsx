import React, { FunctionComponent, useState, useEffect } from 'react';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import UDButton from '../button';
import { Field, initialize } from 'redux-form';
import UDFormDatePickerField from 'src/modules/ud-ui/form/ui/components/date-picker';
import { formValueSelector } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

type DatePickerProps = {};

type CustomInputType = {
  value?: string;
  onClick?: () => void;
};

const selector = formValueSelector('createEvent');

registerLocale('ru', ru);
setDefaultLocale('ru');

const UDDatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const currentDate = new Date();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      initialize('createEvent', {
        startDate: currentDate,
        startTime: currentDate,
        endDate: currentDate,
        endTime: currentDate,
      })
    );
  }, []);

  const startDate = useSelector((state) => selector(state, 'startDate'));
  const startTime = useSelector((state) => selector(state, 'startTime'));
  const endDate = useSelector((state) => selector(state, 'endDate'));
  const endTime = useSelector((state) => selector(state, 'endTime'));

  const isSameDate = startDate?.toDateString() === endDate?.toDateString();
  const isToday = new Date().toDateString() === startDate?.toDateString();

  const minStartTime = isToday
    ? setHours(
        setMinutes(new Date(), new Date().getMinutes()),
        new Date().getHours()
      )
    : setHours(setMinutes(new Date(), 0), 0);

  const minEndTime: Date = isSameDate
    ? setHours(
        setMinutes(new Date(), startTime?.getMinutes()),
        startTime?.getHours()
      )
    : setHours(setMinutes(new Date(), 0), 0);

  return (
    <div className={'mb-13'}>
      <S.DateWrap className={'mb-8'}>
        <div className={'mr-5 w-100'}>
          <Field
            component={UDFormDatePickerField}
            name={'startDate'}
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            startDate={startDate || new Date()}
            endDate={endDate}
            selectsStart
            minDate={new Date()}
          />
        </div>

        <Field
          component={UDFormDatePickerField}
          name={'startTime'}
          minTime={minStartTime}
          maxTime={setHours(setMinutes(new Date(), 59), 23)}
          timeFormat="HH.mm"
          selected={startTime}
          // onChange={(time: Date) => setStartTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="HH.mm"
        />

        <S.HorizontalSeparator type={'big'} />

        <div className={'mr-5 w-100'}>
          <Field
            component={UDFormDatePickerField}
            name={'endDate'}
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            // onChange={(date: Date) => setEndDate(date)}
            // customInput={<CustomInput />}
          />
        </div>

        <Field
          component={UDFormDatePickerField}
          name={'endTime'}
          selected={endTime}
          // onChange={(time: Date) => setstartTime(time)}
          minTime={minEndTime}
          maxTime={setHours(setMinutes(new Date(), 59), 23)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="hh:mm aa"
          // customInput={<CustomInput />}
        />
      </S.DateWrap>

      <UDButton theme={'outline'}>+ Добавить дату</UDButton>
    </div>
  );
};

export default UDDatePicker;
