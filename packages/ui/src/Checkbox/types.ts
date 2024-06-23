import type tokens from '@noobcoder19/foundation';

export interface DivSyledProps {
  color?: keyof typeof tokens.colors;
  disabled?: boolean;
  size?: string;
}

export default interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'color'>,
    DivSyledProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DivProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    DivSyledProps {}
