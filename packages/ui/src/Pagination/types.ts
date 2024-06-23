import type tokens from '@noobcoder19/foundation';

export interface StyledDivProps {
  color?: keyof typeof tokens.colors;
}

export interface IconContainerProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  color?: keyof typeof tokens.colors;
}

export default interface PaginationProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'color' | 'onChange'>,
    StyledDivProps {
  iconContainerProps?: IconContainerProps;
  page: number;
  totalPages: number;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
}
