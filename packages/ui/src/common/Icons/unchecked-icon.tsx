import type { SVGProps } from 'react';

export default function UncheckedIcon(
  props: SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z"
        fill="currentColor"
      />
    </svg>
  );
}
