export type Gender = 'F' | 'M';
export type SelectOption<T = string> = { label: string; value: T };
export type Pet = 'kiskutya' | 'kismacska';
export type MathMethods = 'SUM' | 'SUB' | 'MULTI' | 'DIV';

export type RegisterReturnType = {
  onChange: (event: {
    target: unknown;
    type?: unknown;
  }) => Promise<void | boolean>;
  onBlur: (event: {
    target: unknown;
    type?: unknown;
  }) => Promise<void | boolean>;
  ref: (instance: unknown) => void;
  name: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};
