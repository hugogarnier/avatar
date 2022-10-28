import React, { ReactElement } from "react";
import { colors } from "../../../utils/colors";

import { LayerProps } from "../../type";

export const EarRing2 = ({
  color = colors.canary,
  style,
}: LayerProps): ReactElement => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M26 2C39.2548 2 50 12.7452 50 26C50 39.2548 39.2548 50 26 50C12.7452 50 2 39.2548 2 26C2 19.6087 5.5 14.5 8.5715 9.5L9.5 8"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
};
