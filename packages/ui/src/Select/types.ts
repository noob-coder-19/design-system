import type tokens from '@noobcoder19/foundation';
import type { HTMLAttributes } from 'react';

export interface Option {
  value: string | number;
  label: string;

  // Optional properties
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  // Add more properties as needed
  [key: string]: unknown;
}

export interface DivStyledProps {
  color?: keyof typeof tokens.colors;
}

export interface SpanStyledProps extends HTMLAttributes<HTMLSpanElement> {
  disabled?: boolean;
}

export default interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'color'>,
    DivStyledProps {
  loading?: boolean;
  endIcon?: React.ReactNode;
  options: Option[];
}
