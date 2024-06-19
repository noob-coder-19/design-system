import type { SVGProps } from 'react';
import tokens from '@noobcoder19/foundation';

export function ClearIcon({
  height = tokens.spacings[20].value,
  width = tokens.spacings[20].value,
  ...props
}: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
        fill="currentColor"
      />
    </svg>
  );
}
