import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Brows2 = ({
  color = "black",
  className,
  style,
}: LayerProps): ReactElement => {
  const dimensions = { width: 325, height: 71 };

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 325 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M294.949 29.57C297.614 36.877 300.508 43.118 302.087 49.677C303.245 54.488 303.682 59.977 296.914 62.248C289.385 64.772 288.394 58.821 286.391 54.396C284.244 49.7773 282.393 45.0267 280.85 40.173C279.37 35.349 276.569 33.252 271.539 33.391C266.489 33.531 263.547 36.303 262.168 40.635C260.495 45.891 259.284 51.309 258.126 56.712C257.159 61.223 253.953 61.466 250.374 61.326C246.828 61.187 245.074 59.226 244.526 55.826C241.253 35.679 250.612 17.571 270.351 14.563C282.615 12.695 289.371 19.056 294.949 29.57Z"
        fill={color}
      />
      <path
        d="M50.5937 32.997C65.7337 12.451 80.0557 8.54604 94.5327 21.675C103.733 30.015 103.285 42.888 105.308 54.255C105.846 57.272 103.208 60.037 100.001 60.555C96.5013 61.2619 92.9836 59.4284 91.5587 56.155C89.9007 52.295 89.4357 47.939 88.0027 43.961C86.2917 39.211 84.7687 34.041 78.3387 33.505C71.9387 32.972 67.6917 36.463 65.0857 41.589C61.4687 48.702 60.3287 61.51 49.3537 56.247C38.9917 51.279 47.5047 41.454 50.5937 32.997Z"
        fill={color}
      />
    </svg>
  );
};
