import type { SVGProps } from 'react';
import tokens from '@noobcoder19/foundation';

function RadioOffFillIcon({
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
        d="M12 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8 8 0 0 0-8-8"
        fill="currentColor"
      />
    </svg>
  );
}

export default RadioOffFillIcon;
