import React, { ReactElement } from "react";

import { LayerProps } from "../Layer";

export const NotionEyes2 = ({
  color = "black",
  height = 0,
  width = 0,
  className,
}: Omit<LayerProps, "name">): ReactElement => {
  const dimensions = { width: 510, height: 165 };
  const cHeight = height;
  const cWidth = width;
  return (
    <svg
      width={cWidth || dimensions.width}
      height={cHeight || dimensions.height}
      viewBox="0 0 510 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M215.129 76.6349C220.116 64.5969 224.019 47.2349 239.214 54.1199C259.893 63.4929 253.072 84.8459 248.89 101.481C247.312 107.758 234.37 117.393 230.636 115.837C214.348 109.046 211.371 94.0949 215.129 76.6349Z"
        fill={color}
      />
      <path
        d="M441.957 113.426C433.382 120.882 424.988 121.026 419.816 111.926C410.704 95.887 411.203 79.101 423.14 64.686C425.634 61.675 436.893 61.056 439.415 63.744C453.358 78.605 453.959 95.46 441.957 113.426Z"
        fill={color}
      />
    </svg>
  );
};
