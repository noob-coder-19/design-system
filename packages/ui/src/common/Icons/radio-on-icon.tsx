import type { SVGProps } from 'react';
import tokens from '@noobcoder19/foundation';

function RadioOnFillIcon({
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
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"
        fill="currentColor"
      />
      <path d="M12 7a5 5 0 1 0 5 5a5 5 0 0 0-5-5" fill="currentColor" />
    </svg>
  );
}

export default RadioOnFillIcon;
