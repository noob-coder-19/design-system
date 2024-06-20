import type { HTMLAttributes } from 'react';

export default interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number; // in milliseconds
  onClose?: () => void;
  alertAction?: React.ReactNode;
  closeOnAction?: boolean;
  startIconProps?: HTMLAttributes<HTMLSpanElement>;
}
