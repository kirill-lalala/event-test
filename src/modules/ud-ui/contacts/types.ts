import { IconNames } from 'src/modules/ud-ui/icon/types';

type ContactType = 'mail' | 'telegram';
type Contact = {
  label: ContactType;
  data: string;
  icon: IconNames;
};
export type Contacts = Contact[];

export type ContactsProps = {
  showing: Array<ContactType>;
};
