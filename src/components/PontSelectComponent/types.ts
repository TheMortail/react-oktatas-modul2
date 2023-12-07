import { RegisterReturnType, SelectOption } from '../../common/types';

export type PontSelectType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
  options?: Array<SelectOption>;
  nullable?: boolean;
};
