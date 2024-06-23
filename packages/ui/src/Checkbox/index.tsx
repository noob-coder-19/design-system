import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import CheckedIcon from '../common/Icons/checked-icon';
import UncheckedIcon from '../common/Icons/unchecked-icon';
import type { DivProps } from './types';
import type CheckboxProps from './types';

const DivStyled = styled.div<DivProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.size};
  height: ${(props) => props.size};

  padding: 0.25rem;
  border-radius: 50%;
  transition: ${tokens.animations.default.value};

  &:hover {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][100].value};
  }

  &:active {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][200].value};
  }

  &[aria-checked='true'] {
    color: ${(props) => tokens.colors[props.color || 'primary'][500].value};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.4;
    background-color: transparent;
    color: ${tokens.colors.neutral[400].value};
  }
`;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = '1.5rem',
      color = 'primary',
      disabled = false,
      defaultChecked,
      onChange,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState<boolean>(
      props.checked || defaultChecked || false,
    );

    const toggleChecked = (seed?: boolean): void => {
      if (seed === undefined) {
        setChecked((oldChecked) => !oldChecked);
        return;
      }

      setChecked(seed);
    };

    const inputRefOnChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
      if (onChange) {
        onChange(event);
      }
    };

    const handleToggleChecked = (seed?: boolean): void => {
      if (disabled) {
        return;
      }

      if (inputRef.current) {
        inputRef.current.click();
      }

      toggleChecked(props.checked === undefined ? seed : props.checked);
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ): void => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggleChecked();
      }
    };

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current,
    );

    return (
      <>
        <DivStyled
          aria-checked={checked}
          aria-disabled={disabled}
          color={color}
          disabled={disabled}
          onClick={() => {
            handleToggleChecked();
          }}
          onKeyDown={handleKeyDown}
          role="checkbox"
          size={size}
          tabIndex={0}
          {...props}
        >
          {checked ? (
            <CheckedIcon
              color={tokens.colors[color][500].value}
              height={size}
              width={size}
            />
          ) : (
            <UncheckedIcon
              color={tokens.colors.neutral[600].value}
              height={size}
              width={size}
            />
          )}
        </DivStyled>

        <input
          aria-disabled={disabled}
          checked={checked}
          disabled={disabled}
          hidden
          onChange={(event) => {
            inputRefOnChange(event);
          }}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          type="checkbox"
          {...props}
        />
      </>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
