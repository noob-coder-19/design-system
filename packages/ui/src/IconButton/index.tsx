import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef } from 'react';
import type IconButtonProps from './types';

const IconButtonSyled = styled.button<IconButtonProps>`
  all: unset;
  cursor: pointer;
  padding: ${tokens.spacings[4].value} ${tokens.spacings[4].value};

  display: flex;

  &:disabled {
    cursor: not-allowed;
    opacity: 40%;
  }

  border-radius: ${(props) => tokens.radius[props.radius || 'infinity'].value};
  color: ${tokens.colors.neutral.white.value};
  background-color: ${(props) =>
    tokens.colors[props.color || 'primary'][500].value};

  &:active {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][800].value};
  }
`;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      disabled = false,
      loading = false,
      color = 'primary',
      radius = 'infinity',
      ...props
    },
    ref,
  ) => {
    return (
      <IconButtonSyled
        color={color}
        disabled={disabled || loading}
        radius={radius}
        ref={ref}
        {...props}
      >
        {props.children}
      </IconButtonSyled>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
