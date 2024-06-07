import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef, useRef, useState } from 'react';
import type SwitchProps from './types';
import type { SpanStyledProps } from './types';

const DivStyled = styled.div`
  display: inline-block;
  position: relative;
  width: ${tokens.spacings[48].value};
  height: ${tokens.spacings[24].value};

  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.4;
  }
`;

const InputStyled = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &[disabled] {
    pointer-events: none;
  }
`;

const SpanStyled = styled.span<SpanStyledProps>`
  position: absolute;
  cursor: 'pointer';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked, color = 'primary' }) =>
    checked
      ? tokens.colors[color][500].value
      : tokens.colors.neutral[400].value};
  transition: 0.4s;
  border-radius: ${tokens.spacings[24].value};

  &:before {
    position: absolute;
    content: '';
    height: ${tokens.spacings[16].value};
    width: ${tokens.spacings[16].value};
    left: ${({ checked }) =>
      checked ? tokens.spacings[28].value : tokens.spacings[4].value};
    bottom: ${tokens.spacings[4].value};
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  &[disabled] {
    pointer-events: none;
  }
`;

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      color = 'primary',
      disabled = false,
      onChange,
      defaultChecked,
      checked: controlledChecked,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState(
      controlledChecked || defaultChecked || false,
    );

    const toggleChecked = (newChecked?: boolean) => {
      if (disabled) {
        return;
      }

      if (newChecked === undefined) {
        setChecked((oldChecked) => !oldChecked);
        return;
      }

      setChecked(newChecked);
    };

    const handleInputOnChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      if (disabled) {
        return;
      }

      if (onChange) {
        onChange(event);
      }

      if (controlledChecked === undefined) {
        toggleChecked(event.target.checked);
      }
    };

    return (
      <DivStyled
        aria-disabled={disabled}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
        ref={ref}
      >
        <InputStyled
          aria-checked={checked}
          aria-disabled={disabled}
          checked={checked}
          disabled={disabled}
          onChange={(event) => {
            handleInputOnChange(event);
          }}
          ref={inputRef}
          role="switch"
          type="checkbox"
          {...props}
        />

        <SpanStyled checked={checked} color={color} disabled={disabled} />
      </DivStyled>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
