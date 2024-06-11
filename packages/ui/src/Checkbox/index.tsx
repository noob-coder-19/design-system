import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import CheckedIcon from '../common/Icons/checked-icon';
import UncheckedIcon from '../common/Icons/unchecked-icon';
import type { DivSyledProps } from './types';
import type CheckboxProps from './types';

const DivStyled = styled.div<DivSyledProps>`
  cursor: pointer;

  padding: 0.25rem;

  &[aria-checked='true'] {
    color: ${(props) => tokens.colors[props.color || 'primary'][500].value};
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

    const toggleChecked = (checked?: boolean) => {
      if (checked === undefined) {
        setChecked((old_checked) => !old_checked);
        return;
      }

      setChecked(checked);
    };

    const inputRefOnChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
      if (onChange) {
        onChange(event);
      }
    };

    const handleToggleChecked = (checked?: boolean) => {
      if (disabled) {
        return;
      }

      if (inputRef.current) {
        inputRef.current.click();
      }

      if (props.checked === undefined) {
        toggleChecked(props.checked === undefined ? checked : props.checked);
      }
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ): void => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggleChecked();
      }
    };

    useImperativeHandle(ref, () => inputRef.current!);

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
