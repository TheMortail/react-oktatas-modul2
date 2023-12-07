import { RegisterReturnType } from '../../common/types';

export type PontCheckboxType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
};
