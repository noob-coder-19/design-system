import type tokens from '@noobcoder19/foundation';

export default interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  disabled?: boolean;
  loading?: boolean;

  /** Color of the button */
  color?: keyof typeof tokens.colors;
  radius?: keyof typeof tokens.radius;
}
