import tokens from '@noobcoder19/foundation';
import { styled } from 'styled-components';
import { forwardRef } from 'react';
import type SelectProps from './types';
import type { DivStyledProps, SpanStyledProps } from './types';

const DivStyled = styled.div<DivStyledProps>`
  position: relative;
  display: inline-flex;

  align-items: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 40%;
  }

  border-radius: ${tokens.radius.small.value};
  border: 1px solid ${tokens.colors.neutral[300].value};

  color: ${(props) => tokens.colors[props.color || 'primary'][500].value};
`;

const SpanStyled = styled.span<SpanStyledProps>`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);

  pointer-events: none;

  display: inline-flex;
  align-items: center;

  &:disabled {
    opacity: 40%;
  }
`;

const SelectStyled = styled.select<SelectProps>`
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 40%;
  }

  border-radius: ${tokens.radius.small.value};

  padding: 8px 16px;
  padding-right: calc(1.5em + 0.75rem);

  color: inherit;
  background-color: transparent;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ loading = false, endIcon, color = 'primary', ...props }, ref) => {
    return (
      <DivStyled color={color}>
        <SelectStyled ref={ref} {...props} disabled={loading}>
          {props.options.map((option) => (
            <option
              disabled={option.disabled}
              key={option.value}
              selected={option.selected}
              style={{
                color: option.disabled
                  ? tokens.colors.neutral[400].value
                  : undefined,
                fontWeight: option.selected ? 'bold' : undefined,
              }}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </SelectStyled>

        {endIcon ? (
          <SpanStyled
            aria-disabled={loading || props.disabled}
            disabled={loading || props.disabled}
          >
            {endIcon}
          </SpanStyled>
        ) : null}
      </DivStyled>
    );
  },
);

Select.displayName = 'Select';

export default Select;
