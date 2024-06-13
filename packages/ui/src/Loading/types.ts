import type tokens from '@noobcoder19/foundation';

export default interface LoadingProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  size?: string;
  color?: keyof typeof tokens.colors;
}
