import React, { ReactElement } from "react";
import { colors } from "../../../utils/colors";

import { LayerProps } from "../../type";

export const Beard1 = ({
  color = colors.coast,
  style,
}: LayerProps): ReactElement => {
  return (
    <svg
      width="164"
      height="154"
      viewBox="0 0 164 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "55%",
        position: "absolute",
        top: "1%",
        left: "0.5%",
        zIndex: 2,
      }}
    >
      <path
        d="M146.126 49.1542C155.615 88.7582 131.201 128.556 91.5974 138.045C68.2902 143.629 44.9161 137.471 27.6919 123.386C10.5 107.5 6.5 56 2.69241 31.6493C16.6919 63.1498 52.3165 65.5947 86.1924 59.6506C114.692 54.6498 137.491 53.6498 137.491 14.6498C139.376 17.2662 144.469 42.2373 146.126 49.1542Z"
        fill={color}
      />
    </svg>
  );
};
