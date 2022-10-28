import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Nose1 = ({ style }: LayerProps): ReactElement => {
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
        d="M16.5 7C16.1667 10.8333 16.5 19.2 20.5 22C25.5 25.5 20 34 10 32"
        stroke="#171921"
        stroke-width="4"
      />
    </svg>
  );
};
