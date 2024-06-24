import tokens from '@noobcoder19/foundation';
import { forwardRef } from 'react';
import { styled } from 'styled-components';
import RightArrowIcon from '../common/Icons/right-arrow';
import LeftArrowIcon from '../common/Icons/left-arrow';
import type { IconContainerProps, StyledDivProps } from './types';
import type PaginationProps from './types';

const DivStyled = styled.div<StyledDivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacings[4].value};

  color: ${({ color }) => tokens.colors[color || 'primary'][500].value};
`;

const NavigationButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => tokens.colors[color || 'primary'][500].value};

  height: ${tokens.spacings[20].value};
  width: ${tokens.spacings[20].value};
`;

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      color = 'primary',
      iconContainerProps = {},
      page = 0,
      totalPages = 0,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <DivStyled color={color} ref={ref} {...props}>
        <NavigationButton
          aria-disabled={page < 2}
          disabled={page < 2}
          onClick={(event) => {
            if (onChange) {
              onChange(event, page - 1);
            }
          }}
          type="button"
        >
          <ScreenReaderOnly>Previous Page</ScreenReaderOnly>
          <IconContainer {...iconContainerProps} color={color}>
            <LeftArrowIcon height="100%" width="100%" />
          </IconContainer>
        </NavigationButton>

        <p>
          {page} of {totalPages}
        </p>

        <NavigationButton
          aria-disabled={page >= totalPages}
          disabled={page >= totalPages}
          onClick={(event) => {
            if (onChange) {
              onChange(event, page + 1);
            }
          }}
          type="button"
        >
          <ScreenReaderOnly>Next Page</ScreenReaderOnly>
          <IconContainer {...iconContainerProps} color={color}>
            <RightArrowIcon height="100%" width="100%" />
          </IconContainer>
        </NavigationButton>
      </DivStyled>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
