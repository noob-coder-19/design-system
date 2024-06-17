import { css, styled } from 'styled-components';
import { forwardRef } from 'react';
import tokens from '@noobcoder19/foundation';
import type DividerProps from './types';

const DivStyled = styled.div<DividerProps>`
  border-width: 0;
  border-color: ${(props) => props.color || '#000'};
  position: relative;
  flex-shrink: 0;

  ${(props) =>
    props.orientation === 'vertical'
      ? css`
          height: 100%;
          display: inline-block;
          margin: 0 ${props.disableGutters ? 0 : tokens.spacings[8].value};
          border-left-width: ${props.thickness || '1px'};
        `
      : css`
          width: 100%;
          display: block;
          margin: ${props.disableGutters ? 0 : tokens.spacings[8].value} 0;
          border-top-width: ${props.thickness || '1px'};
        `};

  ${(props) => {
    switch (props.variant) {
      case 'dashed':
        return css`
          border-style: dashed;
        `;
      case 'dotted':
        return css`
          border-style: dotted;
        `;
      default:
        return css`
          border-style: solid;
        `;
    }
  }}
`;

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      color = '#000',
      thickness = '1px',
      variant = 'solid',
      ...props
    },
    ref,
  ) => {
    return (
      <DivStyled
        color={color}
        orientation={orientation}
        ref={ref}
        thickness={thickness}
        variant={variant}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';

export default Divider;
