import { ForwardedRef, InputHTMLAttributes, ReactElement } from 'react';

export type InputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  Exclude<Exclude<keyof InputHTMLAttributes<HTMLInputElement>, 'onChange'>, 'placeholder'>
> & {
  clearable?: boolean;
  disabled?: boolean;
  error?: string | boolean;
  id?: string;
  innerRef?: ForwardedRef<HTMLDivElement>;
  leftAddon?: ReactElement;
  name: string;
  onChange?(value: string | number | boolean | File | null): void;
  placeholder?: string | ReactElement;
  rightAddon?: ReactElement;
};
