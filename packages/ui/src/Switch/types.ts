import type tokens from '@noobcoder19/foundation';

export interface SpanStyledProps {
  checked?: boolean;
  disabled?: boolean;
  color?: keyof typeof tokens.colors;
}

export default interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange' | 'color'>,
    SpanStyledProps {
  onChange?: (e: React.ChangeEvent) => void;
}
