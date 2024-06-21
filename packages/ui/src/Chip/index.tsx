import { styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { forwardRef } from 'react';
import { ClearIcon } from '../common/Icons/clear-icon';
import { DragIcon } from '../common/Icons/drag-icon';
import type ChipProps from './types';

const DivStyled = styled.div<ChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacings[8].value};

  border-width: ${tokens.spacings[1].value};
  border-style: solid;
  border-color: ${({ color = 'neutral' }) => tokens.colors[color][600].value};

  border-radius: ${tokens.radius.infinity.value};
  padding: ${tokens.spacings[8].value} ${tokens.spacings[16].value};

  color: ${({ color = 'neutral' }) => tokens.colors[color][600].value};
  font-size: ${tokens.spacings[16].value};

  &:hover {
    background-color: ${({ color = 'neutral' }) =>
      tokens.colors[color][100].value};
  }

  & > button {
    background: none;
    border-radius: ${tokens.radius.infinity.value};
    cursor: pointer;
  }

  & > button:hover {
    color: ${({ color = 'neutral' }) => tokens.colors[color][500].value};
  }
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      clearable = false,
      color = 'neutral',
      clearIcon,
      onClear,
      iconProps = {},
      isDraggable = false,
      dragIcon,
      dragIconProps = {},
      children,
      ...props
    },
    ref,
  ) => {
    if (clearable && !clearIcon) {
      clearIcon = (
        <ClearIcon
          height={tokens.spacings[20].value}
          width={tokens.spacings[20].value}
          {...iconProps}
        />
      );
    }

    if (isDraggable && !dragIcon) {
      dragIcon = (
        <DragIcon
          height={tokens.spacings[20].value}
          width={tokens.spacings[20].value}
          {...iconProps}
          {...dragIconProps}
        />
      );
    }

    return (
      <DivStyled color={color} ref={ref} {...props}>
        {isDraggable ? <button>{dragIcon}</button> : null}

        <span>{children}</span>

        {clearable ? <button onClick={onClear}>{clearIcon}</button> : null}
      </DivStyled>
    );
  },
);

Chip.displayName = 'Chip';

export default Chip;
