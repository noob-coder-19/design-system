import { forwardRef } from 'react';
import tokens from '@noobcoder19/foundation';
import { styled } from 'styled-components';
import type PaperProps from './types';

const DivStyled = styled.div<PaperProps>`
  box-shadow: ${(props) => tokens.shadows[props.elevation || 'level-1'].value};
`;

const Paper = forwardRef<HTMLInputElement, PaperProps>(
  ({ elevation = 'level-1', children, ...props }, ref) => {
    return (
      <DivStyled elevation={elevation} ref={ref} {...props}>
        {children}
      </DivStyled>
    );
  },
);

Paper.displayName = 'Paper';

export default Paper;
