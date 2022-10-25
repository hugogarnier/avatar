import React, { ReactElement } from "react";

import { LayerProps } from "../Layer";

export const NotionBeard1 = ({
  color = "black",
  height = 0,
  width = 0,
  className,
}: Omit<LayerProps, "name">): ReactElement => {
  const dimensions = { width: 449, height: 312 };
  const cHeight = height;
  const cWidth = width;
  return (
    <svg
      width={cWidth || dimensions.width}
      height={cHeight || dimensions.height}
      viewBox="0 0 449 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M253.599 88.3358C232.878 82.5725 204.763 82.4785 190.156 88.5118C129.957 113.38 127.983 189.952 145.797 223.398C157.395 245.17 181.386 264.759 205.451 284.408L205.561 284.498C224.306 299.802 242.304 304.055 265.314 309.493C266.406 309.751 267.509 310.011 268.625 310.276C278.799 312.691 287.443 312.059 296.296 311.412C300.601 311.097 304.954 310.779 309.557 310.805C326.673 310.904 342.389 299.486 353.853 288.995C372.756 271.692 386.513 250.708 384.321 223.503C383.196 209.543 386.257 196.789 392.747 184.27C403.385 163.747 407.837 142.314 403.135 118.978C399.358 100.235 385.309 86.596 365.619 85.2292C343.245 83.6753 289.983 99.0455 289.983 99.0455C289.983 99.0455 261.679 90.5835 253.599 88.3358ZM317.387 218.129C317.387 218.129 291.013 221.778 290.194 221.954C268.955 242.679 229.911 246.622 216.385 233.417C194.75 212.295 200.206 202.87 204.506 195.441C206.292 192.356 207.878 189.615 207.24 186.523C212.517 190.211 217.025 194.308 221.363 198.251C228.16 204.427 234.54 210.225 242.804 213.481C246.661 207.338 243.437 204.264 240.47 201.435C240.371 201.341 240.272 201.246 240.174 201.152C232.557 193.862 227.089 185.073 221.637 176.309C221.219 175.636 220.801 174.964 220.382 174.292C210.368 158.246 219.051 141.01 238.228 138.381C253.386 136.302 260.859 135.278 267.445 132.296C273.849 129.397 279.416 124.649 290.395 115.284C303.318 127.653 320.315 130.606 337.707 133.013C348.879 134.56 354.366 144.455 352.874 155.687C351.534 165.772 346.235 173.827 340.941 181.874C338.094 186.201 335.249 190.527 333.021 195.164C332.777 195.672 332.467 196.166 332.158 196.66C331.118 198.316 330.081 199.968 331.55 202.118C337.791 202.298 341.705 197.626 345.645 192.926C351.027 186.503 356.454 180.026 367.923 185.799C354.845 244.558 317.387 218.129 317.387 218.129Z"
        fill={color}
      />
    </svg>
  );
};
