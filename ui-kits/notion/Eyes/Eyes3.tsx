import React, { ReactElement } from "react";

import { LayerProps } from "../../type";

export const Eyes3 = ({
  color = "black",
  className,
  style,
}: LayerProps): ReactElement => {
  const dimensions = { width: 510, height: 165 };
  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 510 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M215.129 76.6352C220.116 64.5972 224.019 47.2352 239.214 54.1202C259.893 63.4932 253.072 84.8462 248.89 101.481C247.312 107.758 234.37 117.393 230.636 115.837C214.348 109.046 211.371 94.0952 215.129 76.6352Z"
        fill={color}
      />
      <path
        d="M441.957 113.426C433.382 120.882 424.988 121.026 419.816 111.926C410.704 95.8873 411.203 79.1012 423.14 64.6863C425.634 61.6753 436.893 61.0563 439.415 63.7443C453.358 78.6053 453.959 95.4603 441.957 113.426Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M326.085 14.2806L326.09 14.2807C378.114 14.6256 429.329 14.9652 480.544 15.3794C485.22 15.534 489.883 15.946 494.514 16.6134C501.63 17.4614 504.914 20.8004 506.493 28.6454C512.719 59.4944 509.293 89.6594 500.216 119.034C494.758 136.708 480.225 147.104 462.668 152.575C439.738 159.719 416.221 164.951 392.868 156.475C372.129 148.945 355.692 136.48 350.013 112.539C349.303 109.544 348.414 106.608 347.53 103.683L347.529 103.683C345.015 95.3716 342.532 87.1619 344.256 78.0094C344.995 74.0846 341.194 72.1474 338.207 70.6247L338.177 70.6094C323.187 62.9634 308.477 70.4184 305.769 87.0873C302.799 105.375 296.769 122.896 286.408 137.877C269.864 161.791 244.758 167.261 217.399 164.024C195.852 161.474 177.235 152.436 161.199 137.436C146.849 124.014 139.582 107.894 141.123 88.6413C142.023 77.4353 135.702 72.3414 127.423 70.9314C113.107 68.4907 99.8378 63.0844 86.639 57.707L86.6388 57.7069C81.8891 55.7718 77.1486 53.8404 72.3718 52.0524C65.1808 49.361 57.8737 47.0678 50.5722 44.7763L50.572 44.7762C42.5345 42.2537 34.5037 39.7333 26.6418 36.6864C26.2867 36.5487 25.9342 36.4166 25.5868 36.2865L25.5865 36.2863C21.7695 34.8561 18.5647 33.6552 19.1898 27.8214C24.8918 25.1602 30.1296 26.8678 35.5545 28.6364C39.1441 29.8067 42.8156 31.0036 46.7578 30.9794C44.0728 21.9984 38.4798 18.6064 29.4968 18.2084C18.7228 17.7304 9.0968 14.0314 1.9668 5.03335C6.7408 0.381352 10.9938 0.713352 15.1478 1.84035C36.5154 7.63852 58.3455 10.9264 80.182 14.2152C98.1758 16.9252 116.174 19.6359 133.921 23.7524C144.207 26.1374 155.26 26.1804 164.961 17.3304C171.177 11.6581 180.445 11.8461 188.93 12.0183C189.98 12.0396 191.017 12.0607 192.036 12.0704C217.289 12.3065 242.538 12.861 268.238 13.4255L268.238 13.4255C278.889 13.6594 289.617 13.895 300.455 14.1104C309.022 14.1675 317.564 14.2241 326.085 14.2806ZM150.355 79.9714C153.718 121.682 177.102 142.956 213.135 150.965C236.708 156.205 265.408 151.103 279.945 124.185C288.128 109.032 292.767 93.0453 296.958 76.6013C300.829 61.4084 311.193 56.5554 332.599 58.3404C346.893 59.5324 353.475 66.1843 355.399 80.8054C356.842 91.7644 358.475 102.705 360.42 113.589C362.876 127.337 379.853 143.913 393.732 146.698C415.071 151.112 437.219 149.481 457.682 141.99C469.662 137.651 480.587 131.619 486.359 118.996C496.441 96.9473 499.454 73.7104 499.138 49.7804C498.848 27.8594 497.523 26.3804 474.838 26.2904C460.747 26.2342 446.655 26.2507 432.564 26.2673C413.027 26.2902 393.49 26.3132 373.954 26.1424C348.98 25.9247 324.007 25.6038 299.034 25.2829L299.034 25.2829C269.977 24.9095 240.921 24.5362 211.863 24.3254C208.381 24.3002 204.787 23.9627 201.176 23.6235C190.434 22.6148 179.533 21.591 170.936 28.7254C161.994 36.143 153.101 36.1201 143.533 36.0954H143.532C142.384 36.0925 141.226 36.0895 140.057 36.0994C137.557 36.1206 135.093 35.6065 132.602 35.0867C128.398 34.2095 124.117 33.3163 119.457 34.9534C120.778 49.7694 124.149 62.7194 141.398 66.1784C147.746 67.4483 151.122 71.0094 150.351 79.9714H150.355ZM74.5455 26.5604C83.3898 25.4115 91.5589 24.3502 94.4388 37.1144H94.4348C95.9532 41.8559 97.0939 44.8436 98.4956 48.5147L98.5138 48.5624C85.5078 45.7934 75.3408 40.8414 70.3858 27.0514C71.7771 26.9201 73.1695 26.7392 74.5455 26.5604Z"
        fill={color}
      />
      <path
        d="M286.904 44.7544C286.23 38.7544 290.032 37.4204 293.92 37.4084C312.993 37.3504 332.073 37.4244 351.137 37.9224C355.486 37.9429 359.579 39.9825 362.213 43.4424C355.311 51.5004 308.639 52.8264 286.904 44.7544Z"
        fill={color}
      />
    </svg>
  );
};
