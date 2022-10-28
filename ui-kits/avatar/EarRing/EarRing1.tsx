import React, { ReactElement } from "react";
import { colors } from "../../../utils/colors";

import { LayerProps } from "../../type";

export const EarRing1 = ({
  color = colors.canary,
  style,
}: LayerProps): ReactElement => {
  return (
    <svg
      width="48"
      height="50"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <circle cx="25" cy="4" r="4" fill={color} />
      <circle cx="26" cy="3" r="1" fill="#FFEDEF" />
    </svg>
  );
};
