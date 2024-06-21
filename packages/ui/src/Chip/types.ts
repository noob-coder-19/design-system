import type { MouseEventHandler, SVGProps } from 'react';
import type tokens from '@noobcoder19/foundation';

export interface DivStyledProps {
  color?: keyof typeof tokens.colors;
}

export default interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    DivStyledProps {
  clearable?: boolean;
  clearIcon?: React.ReactNode;
  onClear?: MouseEventHandler<HTMLButtonElement>;
  iconProps?: Omit<SVGProps<SVGSVGElement>, 'color'>;

  isDraggable?: boolean;
  dragIcon?: React.ReactNode;
  dragIconProps?: Omit<SVGProps<SVGSVGElement>, 'color'>;
}
