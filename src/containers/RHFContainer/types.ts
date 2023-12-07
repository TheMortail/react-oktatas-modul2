import { Gender } from '../../common/types';

export type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  accept: boolean;
};

export const defaultFormValues: FormValues = {
  firstName: '',
  lastName: '',
  age: 0,
  gender: 'M',
  accept: false,
};
