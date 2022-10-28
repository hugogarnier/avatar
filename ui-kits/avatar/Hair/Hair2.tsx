import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Hair2 = ({ style }: LayerProps): ReactElement => {
  return (
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M140 56C154.667 55.3333 180.4 47.2 166 20"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d="M114 54C128.667 53.3333 154.4 45.2 140 18"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d="M78 65C92.6667 64.3333 118.4 56.2 104 29"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  );
};