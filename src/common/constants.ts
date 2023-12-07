import { Gender, Pet, SelectOption } from './types';

export const GENDER_OPTIONS: SelectOption<Gender>[] = [
  { label: 'No', value: 'F' },
  { label: 'Ferfi', value: 'M' },
];

export const PET_OPTIONS: SelectOption<Pet>[] = [
  { label: 'kiskutya', value: 'kiskutya' },
  { label: 'kismacska', value: 'kismacska' },
];
