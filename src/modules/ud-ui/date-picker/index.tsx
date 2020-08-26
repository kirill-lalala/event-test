import React, { FunctionComponent, useState } from 'react';
import DatePicker, { setDefaultLocale, registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import UDButton from '../button';

type DatePickerProps = {};

type CustomInputType = {
  value?: any;
  onClick?: () => void;
};

registerLocale('ru', ru);
setDefaultLocale('ru');

const UDDatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const isSameDate = startDate.toDateString() === endDate.toDateString();
  const isToday = new Date().toDateString() === startDate.toDateString();

  const CustomInput = ({ value, onClick }: CustomInputType) => {
    return (
      <S.CustomInput type={'button'} onClick={onClick}>
        {value}
      </S.CustomInput>
    );
  };

  const minStartTime = isToday
    ? setHours(
        setMinutes(new Date(), new Date().getMinutes()),
        new Date().getHours()
      )
    : setHours(setMinutes(new Date(), 0), 0);

  const minEndTime = isSameDate
    ? setHours(
        setMinutes(new Date(), startTime.getMinutes()),
        startTime.getHours()
      )
    : setHours(setMinutes(new Date(), 0), 0);

  return (
    <div className={'mb-13'}>
      <S.DateWrap className={'mb-8'}>
        <div className={'mr-5 w-100'}>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            minDate={new Date()}
            onChange={(date: Date) => setStartDate(date)}
            customInput={<CustomInput />}
          />
        </div>

        <DatePicker
          selected={startTime}
          minTime={minStartTime}
          maxTime={setHours(setMinutes(new Date(), 59), 23)}
          timeFormat="HH:mm"
          onChange={(time: Date) => setStartTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="HH:mm"
          customInput={<CustomInput />}
        />

        <S.HorizontalSeparator type={'big'} />

        <div className={'mr-5 w-100'}>
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={(date: Date) => setEndDate(date)}
            customInput={<CustomInput />}
          />
        </div>

        <DatePicker
          selected={startTime}
          onChange={(time: Date) => setStartTime(time)}
          minTime={minEndTime}
          maxTime={setHours(setMinutes(new Date(), 59), 23)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="hh:mm aa"
          customInput={<CustomInput />}
        />
      </S.DateWrap>

      <UDButton theme={'outline'}>+ Добавить дату</UDButton>
    </div>
  );
};

export default UDDatePicker;
