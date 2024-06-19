import type { SVGProps } from 'react';
import tokens from '@noobcoder19/foundation';

export function InfoIcon({
  width = tokens.spacings[20].value,
  height = tokens.spacings[20].value,
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
        d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"
        fill="currentColor"
      />
    </svg>
  );
}
