import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import RadioOnFillIcon from '../common/Icons/radio-on-icon';
import RadioOffFillIcon from '../common/Icons/radio-off-icon';
import type { DivProps } from './types';
import type RadioProps from './types';

const DivStyled = styled.div<DivProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.size};
  height: ${(props) => props.size};

  border-radius: 50%;
  padding: 0.25rem;

  color: ${(props) => tokens.colors[props.color || 'primary'][500].value};

  &:hover {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][100].value};
  }

  &:active {
    background-color: ${(props) =>
      tokens.colors[props.color || 'primary'][200].value};
  }

  &[disabled] {
    background-color: transparent;
    pointer-events: none;
    opacity: 0.4;
    color: ${tokens.colors.neutral[400].value};
  }

  transition: ${tokens.animations.default.value};
`;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = '1.5rem',
      color = 'primary',
      disabled = false,
      onChange,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState(
      props.checked || props.defaultChecked || false,
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

      if (props.checked !== undefined) {
        return;
      }

      toggleChecked(seed);
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ): void => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggleChecked(true);
      }
    };

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current || null,
    );

    return (
      <>
        <DivStyled
          aria-checked={checked}
          checked={checked}
          color={color}
          disabled={disabled}
          onClick={() => {
            handleToggleChecked(true);
          }}
          onKeyDown={handleKeyDown}
          role="radio"
          size={size}
          tabIndex={0}
          {...props}
        >
          {checked ? (
            <RadioOnFillIcon
              color={tokens.colors[color][500].value}
              height={size}
              width={size}
            />
          ) : (
            <RadioOffFillIcon
              color={tokens.colors[color][500].value}
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
          ref={inputRef}
          type="radio"
          {...props}
        />
      </>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
