import { RegisterReturnType } from '../../common/types';

export type PontRadioType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
};
