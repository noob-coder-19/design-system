import tokens from '@noobcoder19/foundation';
import React, { forwardRef } from 'react';
import { styled } from 'styled-components';

const DivStyled = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  padding: ${tokens.spacings[8].value} ${tokens.spacings[16].value};
`;

const AccordionDetails = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <DivStyled ref={ref} {...props}>
          {children}
        </DivStyled>
    );
  },
);

AccordionDetails.displayName = 'AccordionDetails';

export default AccordionDetails;
