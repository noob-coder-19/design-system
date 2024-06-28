import type tokens from '@noobcoder19/foundation';

export interface LiStyledProps {
  /**
   * The color of the MenuItem
   * @defaultValue primary
   */
  color?: keyof typeof tokens.colors;
}

export default interface MenuItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, 'color'>,
    LiStyledProps {
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
