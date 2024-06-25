import type tokens from '@noobcoder19/foundation';

export default interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: keyof typeof tokens.shadows;
}
