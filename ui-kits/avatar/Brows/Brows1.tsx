import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Brows1 = ({ style }: LayerProps): ReactElement => {
  return (
    <svg
      width="149"
      height="48"
      viewBox="0 0 149 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M27 26.5C33.1667 29 48.1 29.5 58.5 11.5"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M94 4C99.1667 9.33333 112.1 16.8 122.5 4"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
