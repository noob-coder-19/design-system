import type tokens from '@noobcoder19/foundation';

export default interface IconButtonProps
  extends React.ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
  /** Aria title should be mandatory for icon buttons */
  'aria-label'?: string;

  /** Color of the button */
  color?: keyof typeof tokens.colors;
  radius?: keyof typeof tokens.radius;
}
