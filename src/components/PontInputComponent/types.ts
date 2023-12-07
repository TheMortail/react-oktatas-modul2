import { RegisterReturnType } from '../../common/types';

export type PontInputType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
  type?: 'text' | 'password' | 'email' | 'number';
};
