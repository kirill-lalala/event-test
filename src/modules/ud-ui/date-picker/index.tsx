import React, { FunctionComponent, useEffect } from 'react';
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { Field, formValueSelector, change } from 'redux-form';
import {
  UDFormDatePickerField,
  UDFormTimePickerField,
} from 'src/modules/ud-ui/form/ui/components/date-picker';
import { useDispatch, useSelector } from 'react-redux';

type DatePickerProps = {
  separatorSize?: 'big' | 'small';
  className?: string;
  member?: string;
};

const selector = formValueSelector('createEvent');

const UDDatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const { separatorSize = 'big', className, member } = props;
  const dispatch = useDispatch();
  const currentDate = new Date();

  const defaultNames = ['startDate', 'startTime', 'endDate', 'endTime'];
  let names = [...defaultNames];
  if (!!member) {
    names = defaultNames.map((name) => `${member}.${name}`);
  }

  const getFieldValue = (name: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSelector((state) => selector(state, name));
  };

  const defaultValues = defaultNames.map((name) => {
    return getFieldValue(name);
  });

  const values = names.map((name) => {
    return getFieldValue(name);
  });

  const [startDate, startTime, endDate, endTime] = values;

  useEffect(() => {
    names.forEach((name, index) => {
      dispatch(
        change('createEvent', name, defaultValues[index] || currentDate)
      );
    });
  }, []);

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
        setMinutes(currentDate, new Date(startTime)?.getMinutes()),
        startTime?.getHours()
      )
    : setHours(setMinutes(currentDate, 0), 0);

  return (
    <div className={className}>
      <S.DateWrap>
        <div className={'mr-5 w-100'}>
          <Field
            component={UDFormDatePickerField}
            name={names[0]}
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
          name={names[1]}
          label={'Время начала'}
          selected={startTime}
          minTime={minStartTime}
          maxTime={setHours(setMinutes(startDate, 59), 23)}
        />

        <S.HorizontalSeparator size={separatorSize} />

        <div className={'mr-5 w-100'}>
          <Field
            component={UDFormDatePickerField}
            name={names[2]}
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
          name={names[3]}
          label={'Время окончания'}
          selected={endTime}
          minTime={minEndTime}
          maxTime={setHours(setMinutes(startDate, 59), 23)}
        />
      </S.DateWrap>
    </div>
  );
};

export default UDDatePicker;
