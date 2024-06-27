import type { InputHTMLAttributes } from 'react';
import type tokens from '@noobcoder19/foundation';

export interface DivStyledProps {
  /**
   * Color of the text field and border on focus.
   */
  color?: keyof typeof tokens.colors;

  /**
   * Full width of the text field.
   */
  fullWidth?: boolean;
}

export interface HasIconProps {
  /**
   * Whether the text field has an start icon.
   */
  hasStartIcon?: boolean;

  /**
   * Whether the text field has an end icon.
   */
  hasEndIcon?: boolean;
}

export interface InputStyledProps
  extends InputHTMLAttributes<HTMLInputElement>,
    HasIconProps {}

export default interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
    DivStyledProps {
  /**
   * The label of the text field.
   */
  label: string;

  /**
   * The icon to display at the start of the text field.
   */
  startIcon?: React.ReactNode;

  /**
   * The icon to display at the end of the text field.
   */
  endIcon?: React.ReactNode;

  /**
   * Props to pass to the icon container.
   */
  iconContainerProps?: React.HTMLAttributes<HTMLSpanElement>;

  /**
   * Ref to the input element.
   */
  inputRef?: React.RefObject<HTMLInputElement>;
}
