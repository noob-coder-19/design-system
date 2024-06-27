import tokens from '@noobcoder19/foundation';
import { styled } from 'styled-components';
import { forwardRef } from 'react';
import type { DivStyledProps, HasIconProps, InputStyledProps } from './types';
import type TextFieldProps from './types';

const DivStyled = styled.div<DivStyledProps>`
  position: relative;
  border-bottom: 1px solid ${tokens.colors.neutral[800].value};
  color: ${tokens.colors.neutral[800].value};
  display: flex;
  align-items: center;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:focus-within {
    border-bottom-width: 2px;
    border-color: ${(props) =>
      tokens.colors[props.color || 'primary'][500].value};
    color: ${(props) => tokens.colors[props.color || 'primary'][500].value};
  }

  &:focus-within label {
    transform: scale(0.75) translateY(-${tokens.spacings[24].value});
  }
`;

const TextFieldStyled = styled.input<InputStyledProps>`
  border: none;
  padding: ${tokens.spacings[8].value};
  padding-left: ${(props) =>
    props.hasStartIcon ? tokens.spacings[32].value : tokens.spacings[8].value};
  padding-right: ${(props) =>
    props.hasEndIcon ? tokens.spacings[32].value : tokens.spacings[8].value};

  width: 100%;

  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:valid ~ label {
    transform: scale(0.75) translateY(-${tokens.spacings[24].value});
  }
`;

const LabelStyled = styled.label<HasIconProps>`
  position: absolute;
  top: ${tokens.spacings[8].value};
  left: ${tokens.spacings[8].value};
  transform-origin: top left;
  transition: ${tokens.animations.default.value};

  transform: ${(props) => {
    return props.hasStartIcon
      ? `scale(0.75) translateY(-${tokens.spacings[24].value})`
      : 'none';
  }};
`;

const IconContainer = styled.span<React.HTMLAttributes<HTMLSpanElement>>`
  display: flex;
  align-items: center;
  position: absolute;

  &.startIcon {
    left: ${tokens.spacings[8].value};
  }

  &.endIcon {
    right: ${tokens.spacings[8].value};
  }
`;

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      label = '',
      color = 'primary',
      startIcon,
      endIcon,
      fullWidth = false,
      iconContainerProps = {},
      inputRef,
      id,
      ...props
    },
    ref,
  ) => {
    const hasStartIcon = Boolean(startIcon);
    const hasEndIcon = Boolean(endIcon);

    return (
      <DivStyled color={color} fullWidth={fullWidth} ref={ref}>
        {startIcon ? (
          <IconContainer className="startIcon" {...iconContainerProps}>
            {startIcon}
          </IconContainer>
        ) : null}

        <TextFieldStyled
          autoComplete="off"
          hasEndIcon={hasEndIcon}
          hasStartIcon={hasStartIcon}
          id={id}
          ref={inputRef}
          required
          {...props}
        />

        <LabelStyled hasStartIcon={hasStartIcon} htmlFor={id}>
          {label}
        </LabelStyled>

        {endIcon ? (
          <IconContainer className="endIcon" {...iconContainerProps}>
            {endIcon}
          </IconContainer>
        ) : null}
      </DivStyled>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
