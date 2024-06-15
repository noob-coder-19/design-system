import type tokens from '@noobcoder19/foundation';

export interface DivStyledProps {
  color?: keyof typeof tokens.colors;
  disabled?: boolean;
  checked?: boolean;
  size?: string;
}

export default interface RadioProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'color'>,
    DivStyledProps {}
