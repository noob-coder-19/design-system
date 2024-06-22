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

const ButtonStyled = styled.button`
  all: unset;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
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
    let localClearIcon = clearIcon;
    if (clearable && !clearIcon) {
      localClearIcon = (
        <ClearIcon
          height={tokens.spacings[20].value}
          width={tokens.spacings[20].value}
          {...iconProps}
        />
      );
    }

    let localDragIcon = dragIcon;
    if (isDraggable && !dragIcon) {
      localDragIcon = (
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
        {isDraggable ? (
          <ButtonStyled type="button">{localDragIcon}</ButtonStyled>
        ) : null}

        <span>{children}</span>

        {clearable ? (
          <ButtonStyled onClick={onClear} type="button">
            {localClearIcon}
          </ButtonStyled>
        ) : null}
      </DivStyled>
    );
  },
);

Chip.displayName = 'Chip';

export default Chip;
