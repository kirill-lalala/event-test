import UDFormComponentsControlWrapper from '../../control-wrapper';
import { UDDatePickerField, UDTimePickerField } from './control';

export const UDFormDatePickerField = UDFormComponentsControlWrapper(
  UDDatePickerField
);

export const UDFormTimePickerField = UDFormComponentsControlWrapper(
  UDTimePickerField
);
