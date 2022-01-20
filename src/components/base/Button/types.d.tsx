import { CSSProperties, ReactElement } from 'react';

export type ButtonProps = {
  id?: string;
  className?: string | undefined;
  color?: 'primary' | 'secondary' | 'transparent';
  disabled?: boolean | undefined;
  external?: boolean | undefined;
  leftAddon?: ReactElement | undefined;
  onClick?: () => void;
  onMouseOver?: () => void;
  rightAddon?: ReactElement | undefined;
  style?: CSSProperties;
  testid?: string | undefined;
  tabIndex?: number | undefined;
  text?: string | undefined;
  to?: string | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
};
