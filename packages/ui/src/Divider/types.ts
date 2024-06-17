export default interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the divider.
   * @defaultValue horizontal
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The color of the divider.
   * @defaultValue #000
   */
  color?: string;

  /**
   * The thickness of the divider.
   * @defaultValue 1px
   */
  thickness?: string;

  /**
   * If true, the divider will not have any margin.
   * @defaultValue false
   */
  disableGutters?: boolean;

  /**
   * The variant of the divider.
   * @defaultValue solid
   */
  variant?: 'solid' | 'dashed' | 'dotted';
}
