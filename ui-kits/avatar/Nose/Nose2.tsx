import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Nose2 = ({ style }: LayerProps): ReactElement => {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32"
        stroke="#171921"
        stroke-width="4"
      />
    </svg>
  );
};