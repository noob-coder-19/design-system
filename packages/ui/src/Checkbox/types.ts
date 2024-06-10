import type tokens from '@noobcoder19/foundation';

export interface DivSyledProps {
  color?: keyof typeof tokens.colors;
  disabled?: boolean;
}

export default interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'color'>,
    DivSyledProps {
  checked?: boolean;
  size?: string;
}
