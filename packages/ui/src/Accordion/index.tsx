import tokens from '@noobcoder19/foundation';
import { styled } from 'styled-components';
import React, { forwardRef, useState } from 'react';
import AccordionDetails from './AccordionDetails';
import AccordionSummary from './AccordionSummary';
import type AccordionProps from './types';


const DivStyled = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  border-radius: ${tokens.spacings[8].value};
  width: 100%;
  transition: ${tokens.animations.default.value};

  box-shadow: ${tokens.shadows['level-1'].value};
  font-size: 1rem;
  border: none;

  &:hover {
    background-color: ${tokens.colors.neutral[100].value};
    box-shadow: ${tokens.shadows['level-3'].value};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    box-shadow: none;
    background-color: ${tokens.colors.neutral[100].value};
  }
`;

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      disabled = false,
      children,
      headerContent,
      expanded,
      defaultExpanded,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [accordionExpanded, setAccordionExpanded] = useState(
      expanded || defaultExpanded || false,
    );

    const toggleExpanded = (newExpanded?: boolean): void => {
      if (newExpanded === undefined) {
        setAccordionExpanded((oldAccordionExpanded) => {
          return !oldAccordionExpanded;
        });

        return;
      }

      setAccordionExpanded(newExpanded);
    };

    return (
        <DivStyled aria-disabled={disabled} ref={ref} {...props}>
          <AccordionSummary
            disabled={disabled}
            expanded={accordionExpanded}
            onClick={(event) => {
              if (expanded === undefined) {
                toggleExpanded();
              }

              if (onChange) {
                onChange(event, !accordionExpanded);
              }
            }}
          >
            {headerContent}
          </AccordionSummary>

          {accordionExpanded && !disabled ? (
            <AccordionDetails>{children}</AccordionDetails>
          ) : null}
        </DivStyled>
    );
  },
);

Accordion.displayName = 'Accordion';

export default Accordion;
