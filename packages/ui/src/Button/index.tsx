import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef } from 'react';
import type ButtonProps from './types';

const ButtonSyled = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  padding: ${tokens.spacings[8].value} ${tokens.spacings[16].value};

  border-radius: ${(props) => tokens.radius[props.radius || 'small'].value};
  color: ${tokens.colors.neutral.white.value};
  background-color: ${(props) =>
    tokens.colors[props.color || 'primary'][500].value};

  &:hover {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][700].value};
  }
  &:active {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][800].value};
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      loading = false,
      color = 'primary',
      radius = 'small',
      ...props
    },
    ref,
  ) => {
    return (
      <ButtonSyled
        color={color}
        disabled={disabled || loading}
        radius={radius}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
