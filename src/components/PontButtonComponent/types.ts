import { ButtonHTMLAttributes, ReactElement } from 'react';

export type PontButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactElement | string | string[];
};
