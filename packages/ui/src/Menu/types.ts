export interface MenuContainerProps {
  top: number;
  left: number;
}

export default interface MenuProps {
  anchorEl?: HTMLElement | null;
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
}
