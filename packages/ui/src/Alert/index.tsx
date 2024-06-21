import { css, styled } from 'styled-components';
import tokens from '@noobcoder19/foundation';
import { useEffect, useState } from 'react';
import Portal from '../Portal';
import { WarningIcon } from '../common/Icons/warning-icon';
import { TickIcon } from '../common/Icons/tick-icon';
import { ClearIcon } from '../common/Icons/clear-icon';
import { InfoIcon } from '../common/Icons/info-icon';
import type AlertProps from './types';

const AlertContainer = styled.div<{ type: AlertProps['type'] }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: ${tokens.spacings[8].value} ${tokens.spacings[16].value};
  border-radius: ${tokens.spacings[4].value};
  font-size: 1rem;
  border-left-width: 5px;
  border-left-style: solid;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${tokens.shadows['level-10'].value};

  ${(props) =>
    props.type === 'success' &&
    css`
      background-color: ${tokens.colors.success[800].value};
      border-left-color: ${tokens.colors.success[400].value};
      color: ${tokens.colors.success[100].value};
    `}
  ${(props) =>
    props.type === 'error' &&
    css`
      background-color: ${tokens.colors.danger[800].value};
      border-left-color: ${tokens.colors.danger[400].value};
      color: ${tokens.colors.danger[100].value};
    `}
  ${(props) =>
    props.type === 'warning' &&
    css`
      background-color: ${tokens.colors.warning[800].value};
      border-left-color: ${tokens.colors.warning[400].value};
      color: ${tokens.colors.warning[100].value};
    `}
  ${(props) =>
    props.type === 'info' &&
    css`
      background-color: ${tokens.colors.neutral[800].value};
      border-left-color: ${tokens.colors.neutral[400].value};
      color: ${tokens.colors.neutral[100].value};
    `}
`;

const ButtonStyled = styled.button`
  margin-left: ${tokens.spacings[16].value};
  background: transparent;
  border: none;
  color: inherit;
  border-radius: ${tokens.radius.infinity.value};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;

  width: ${tokens.spacings[16].value};
  height: ${tokens.spacings[16].value};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SpanStyled = styled.span`
  margin-left: ${tokens.spacings[16].value};
`;

// const Alert2: React.FC<AlertProps> = ({
//   message,
//   type = 'info',
//   duration = 3000,
//   onClose,
//   closeOnAction = false,
//   alertAction = null,
//   startIconProps = {
//     style: {
//       width: '1rem',
//       height: '1rem',
//       marginRight: tokens.spacings[16].value,
//     },
//   },
// }) => {
//   const [visible, setVisible] = useState(true);

//   const handleClose = () => {
//     console.log('Alert closed in handleClose');

//     setVisible(false);
//     if (onClose) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);

//       handleClose();
//     }, duration);

//     return () => clearTimeout(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [duration, onClose]);

//   if (!visible) return null;

//   let Icon = null;
//   if (type === 'error' || type === 'info') {
//     Icon = <InfoIcon width="100%" height="100%"></InfoIcon>;
//   }

//   if (type === 'warning') {
//     Icon = <WarningIcon width="100%" height="100%"></WarningIcon>;
//   }

//   if (type === 'success') {
//     Icon = <TickIcon width="100%" height="100%"></TickIcon>;
//   }

//   if (closeOnAction && alertAction === null) {
//     alertAction = (
//       <ButtonStyled aria-label="close-alert-button">
//         <ClearIcon width="100%" height="100%"></ClearIcon>
//       </ButtonStyled>
//     );
//   }

//   return (
//     <Portal>
//       <AlertContainer type={type} role="alert">
//         <span {...startIconProps}>{Icon}</span>

//         {message}

//         {alertAction ? (
//           <>
//             <SpanStyled
//               role="button"
//               tabIndex={0}
//               onClick={() => {
//                 if (closeOnAction) {
//                   handleClose();
//                 }
//               }}
//               onKeyDown={(e) => {
//                 // Handle keyboard events here
//                 if (e.key === 'Enter' || e.key === ' ') {
//                   if (closeOnAction) {
//                     handleClose();
//                   }
//                 }
//               }}
//             >
//               {alertAction}
//             </SpanStyled>
//           </>
//         ) : null}
//       </AlertContainer>
//     </Portal>
//   );
// };

function Alert({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  closeOnAction = false,
  alertAction = null,
  startIconProps = {
    style: {
      width: '1rem',
      height: '1rem',
      marginRight: tokens.spacings[16].value,
    },
  },
}: AlertProps): JSX.Element | null {
  const [visible, setVisible] = useState(true);

  const handleClose = (): void => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- duration and onClose are dependencies
  }, [duration, onClose]);

  if (!visible) return null;

  let Icon = null;
  if (type === 'error' || type === 'info') {
    Icon = <InfoIcon height="100%" width="100%" />;
  }

  if (type === 'warning') {
    Icon = <WarningIcon height="100%" width="100%" />;
  }

  if (type === 'success') {
    Icon = <TickIcon height="100%" width="100%" />;
  }

  let finalAlertAction = alertAction;
  if (closeOnAction && alertAction === null) {
    finalAlertAction = (
      <ButtonStyled aria-label="close-alert-button">
        <ClearIcon height="100%" width="100%" />
      </ButtonStyled>
    );
  }

  return (
    <Portal>
      <AlertContainer role="alert" type={type}>
        <span {...startIconProps}>{Icon}</span>

        {message}

        {alertAction ? (
          <SpanStyled
            onClick={() => {
              if (closeOnAction) {
                handleClose();
              }
            }}
            onKeyDown={(e) => {
              // Handle keyboard events here
              if (e.key === 'Enter' || e.key === ' ') {
                if (closeOnAction) {
                  handleClose();
                }
              }
            }}
            role="button"
            tabIndex={0}
          >
            {finalAlertAction}
          </SpanStyled>
        ) : null}
      </AlertContainer>
    </Portal>
  );
}

export default Alert;
