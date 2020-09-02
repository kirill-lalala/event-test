import React, { FunctionComponent, useEffect } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { Field, formValueSelector, initialize } from 'redux-form';
import UDFormDatePickerField from 'src/modules/ud-ui/form/ui/components/date-picker';
import { useDispatch, useSelector } from 'react-redux';

type DatePickerProps = {};

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
            dateFormat="dd.MM.yyyy"
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>

        <Field
          component={UDFormDatePickerField}
          name={'endTime'}
          selected={endTime}
          minTime={minEndTime}
          maxTime={setHours(setMinutes(new Date(), 59), 23)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeFormat="HH.mm"
          dateFormat="HH.mm"
        />
      </S.DateWrap>
    </div>
  );
};

export default UDDatePicker;
