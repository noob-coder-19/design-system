import tokens from '@noobcoder19/foundation';
import { forwardRef } from 'react';
import { keyframes, styled } from 'styled-components';
import type LoadingProps from './types';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SpanStyled = styled.span<LoadingProps>`
  display: inline-block;
  height: ${(props) => props.size};
  width: ${(props) => props.size};

  border: 2px solid rgba(0, 0, 0, 0.15);
  border-top: 2px solid
    ${(props) => tokens.colors[props.color || 'primary'][500].value};
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  ({ size = '2rem', color = 'primary', ...props }, ref) => {
    return (
      <SpanStyled
        aria-live="polite"
        color={color}
        ref={ref}
        role="progressbar"
        size={size}
        {...props}
      />
    );
  },
);

Loading.displayName = 'Loading';

export default Loading;
