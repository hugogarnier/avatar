import React, { ReactElement } from "react";

import { LayerProps } from "../Layer";

export const NotionBrows1 = ({
  color = "black",
  height = 0,
  width = 0,
  className,
}: Omit<LayerProps, "name">): ReactElement => {
  const dimensions = { width: 325, height: 71 };
  const cHeight = height;
  const cWidth = width;
  return (
    <svg
      width={cWidth || dimensions.width}
      height={cHeight || dimensions.height}
      viewBox="0 0 325 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.0519 39.028C23.6959 24.628 36.9679 20.386 51.8159 18.9C75.0479 16.574 95.7159 27.425 117.67 31.662C125.628 33.198 124.457 39.213 119.121 42.431C109.712 48.105 99.6109 53.483 87.9139 49.478C65.4139 41.773 42.7639 37.425 19.3409 45.278C13.1109 47.372 14.2819 43.345 15.0519 39.028Z"
        fill={color}
      />
      <path
        d="M255.065 28.98C269.996 26.367 283.721 23.735 297.181 30.522C308.043 35.998 312.155 44.466 310.081 55.999C305.114 59.118 302.56 55.599 299.535 53.538C287.91 45.627 275.647 43.561 262.235 48.873C252.926 52.56 243 51.291 233.278 51.297C228.507 51.297 224.82 49.522 224.462 44.235C224.096 38.835 225.362 33.535 231.353 32.213C238.743 30.589 246.382 30.067 255.065 28.98Z"
        fill={color}
      />
    </svg>
  );
};
