export default interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabled?: boolean;

  // Add props here
  headerContent?: React.ReactNode;

  headerProps?: React.HTMLAttributes<HTMLDivElement>;
  bodyProps?: React.HTMLAttributes<HTMLDivElement>;

  expanded?: boolean;
  defaultExpanded?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLDivElement>,
    expanded: boolean,
  ) => void;
}
