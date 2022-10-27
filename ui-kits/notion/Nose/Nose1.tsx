import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Nose1 = ({
  color = "black",
  className,
  style,
}: LayerProps): ReactElement => {
  const dimensions = { width: 116, height: 227 };

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 116 227"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M109.611 184.963C99.7346 208.178 77.8836 207.55 59.0866 212.237C53.6954 213.676 47.9676 213.144 42.9336 210.737C43.0136 202.226 48.3786 200.437 54.8436 200.574C65.4156 200.793 74.7686 196.514 84.2366 192.88C92.6766 189.641 96.1676 184.68 90.5926 175.265C81.5926 160.065 72.8836 144.73 68.8976 127.035C65.3093 111.679 65.9381 95.6392 70.7176 80.6117C71.9626 76.6307 72.5516 71.4947 78.6966 73.2997C83.7176 74.7737 83.0236 79.1577 81.9876 82.8697C72.7656 115.898 86.9396 142.917 104.188 169.044C107.296 173.756 110.347 178.137 109.611 184.963Z"
        fill={color}
      />
    </svg>
  );
};
