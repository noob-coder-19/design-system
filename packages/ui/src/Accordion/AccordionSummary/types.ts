import type { ClipboardEventHandler, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  _expanded?: boolean;
}

export default interface AccordionSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon?: React.ReactNode;
  /**
   * If `true`, the component will be displayed in a disabled state.
   */
  disabled?: boolean;
  /**
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded?: boolean;

  onCopy?: ClipboardEventHandler<HTMLDivElement>;

  size?: string;
}
