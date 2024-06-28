import type tokens from '@noobcoder19/foundation';

interface LiProps {
  /**
   * The color of the MenuItem
   * @defaultValue primary
   */
  color?: keyof typeof tokens.colors;
}

export interface LiStyledProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, 'color'>,
    LiProps {}

export default interface MenuItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, 'color'>,
    LiProps {
  /**
   * The icon to display at the start of the MenuItem.
   */
  startIcon?: React.ReactNode;

  /**
   * The content of the MenuItem.
   */
  children: React.ReactNode;

  /**
   * The icon to display at the end of the MenuItem.
   */
  endIcon?: React.ReactNode;

  /**
   * If `true`, the MenuItem will be disabled.
   */
  disabled?: boolean;
}
