import tokens from '@noobcoder19/foundation';
import { forwardRef } from 'react';
import { styled } from 'styled-components';
import type { LiStyledProps } from './types';
import type MenuItemProps from './types';

const LiStyled = styled.li<LiStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  // border: ${({ color = 'primary' }) =>
    `1px solid ${tokens.colors[color][500].value}`};
  cursor: pointer;
  transition: ${tokens.animations.default.value};

  padding: ${tokens.spacings[8].value} ${tokens.spacings[16].value};
  gap: ${tokens.spacings[8].value};

  color: ${({ color = 'primary' }) => tokens.colors[color][500].value};
  &:hover {
    background-color: ${({ color = 'primary' }) =>
      tokens.colors[color][100].value};
  }

  &:active {
    background-color: ${({ color = 'primary' }) =>
      tokens.colors[color][200].value};
  }

  &[aria-disabled='true'] {
    opacity: 40%;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      startIcon = null,
      endIcon = null,
      color = 'primary',
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <LiStyled aria-disabled={disabled} color={color} ref={ref} {...props}>
        {startIcon ? <IconContainer>{startIcon}</IconContainer> : null}
        {children}
        {endIcon ? <IconContainer>{endIcon}</IconContainer> : null}
      </LiStyled>
    );
  },
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
