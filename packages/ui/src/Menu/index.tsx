import tokens from '@noobcoder19/foundation';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Portal from '../Portal';
import type MenuProps from './types';
import type { MenuContainerProps } from './types';

const MenuContainer = styled.ul<MenuContainerProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: ${tokens.colors.neutral.white.value};
  box-shadow: ${tokens.shadows['level-15'].value};
  border-radius: 4px;
  z-index: 1300;
  min-width: 160px;
  padding: ${tokens.spacings[4].value} 0;
`;

function Menu({
  anchorEl = null,
  open = false,
  onClose,
  children,
}: MenuProps): JSX.Element | null {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (anchorEl && open) {
      const rect = anchorEl.getBoundingClientRect();
      const menuHeight = 200; // Assume a fixed height for now, or you could dynamically calculate
      const menuWidth = 160; // Assume a fixed width for now, or you could dynamically calculate

      let top = rect.bottom + window.scrollY;
      let left = rect.left + window.scrollX;

      // Check if the menu would overflow the bottom of the viewport
      if (top + menuHeight > window.innerHeight) {
        top = rect.top + window.scrollY - menuHeight; // Position above the anchor element
      }

      // Check if the menu would overflow the right side of the viewport
      if (left + menuWidth > window.innerWidth) {
        left = rect.right + window.scrollX - menuWidth; // Align menu to the right edge of the anchor
      }

      setPosition({ top, left });
    }
  }, [anchorEl, open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (anchorEl && !anchorEl.contains(event.target as Node) && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl, open, onClose]);

  if (!open) return null;

  return (
    <Portal>
      <MenuContainer left={position.left} top={position.top}>
        {children}
      </MenuContainer>
    </Portal>
  );
}

export default Menu;
