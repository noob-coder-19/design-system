import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import React, { forwardRef } from 'react';
import DownArrowIcon from '../../common/Icons/down-arrow';
import type { IconProps } from './types';
import type AccordionSummaryProps from './types';

function ArrowDownIcon({
  _expanded = false,
  ...props
}: IconProps): JSX.Element | null {
  return <DownArrowIcon {...props} />;
}

const ArrowDownIconStyled = styled(ArrowDownIcon)`
  transition: ${tokens.animations.default.value};
  transform: rotate(${(props) => (props._expanded ? '180deg' : '0deg')});
`;

const DivStyled = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${tokens.spacings[8].value};
  padding: ${tokens.spacings[8].value} ${tokens.spacings[16].value};

  cursor: pointer;
  user-select: none;

  &[aria-expanded='true'] {
    border-bottom: 1px solid ${tokens.colors.neutral[200].value};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  }
`;

const AccordionSummary = forwardRef<HTMLDivElement, AccordionSummaryProps>(
  (
    {
      expanded = false,
      disabled = false,
      children,
      expandIcon,
      id,
      size = '1.25rem',
      ...props
    },
    ref,
  ) => {
    const Icon = expandIcon || (
      <ArrowDownIconStyled _expanded={expanded} height={size} width={size} />
    );

    return (
      <DivStyled
        aria-controls={`accordion-panel-${id}`}
        aria-disabled={disabled}
        aria-expanded={expanded}
        id={`accordion-summary-button-${id}`}
        ref={ref}
        role="button"
        tabIndex={0}
        {...props}
      >
        <div>{children}</div>

        <div>{Icon}</div>
      </DivStyled>
    );
  },
);

AccordionSummary.displayName = 'AccordionSummary';

export default AccordionSummary;
