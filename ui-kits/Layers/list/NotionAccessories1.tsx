import React, { ReactElement } from "react";

import { LayerProps } from "../Layer";

export const NotionAccessories1 = ({
  color = "black",
  height = 0,
  width = 0,
  className,
}: Omit<LayerProps, "name">): ReactElement => {
  const dimensions = { width: 638, height: 449 };
  const cHeight = height;
  const cWidth = width;
  return (
    <svg
      width={cWidth || dimensions.width}
      height={cHeight || dimensions.height}
      viewBox="0 0 638 449"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.36732 315.856C-2.78468 282.375 9.56132 214.296 22.2573 186.965C34.9533 159.634 70.0173 97.3655 93.9843 81.4365C117.951 65.5075 171.845 41.4705 190.032 31.1455C208.219 20.8205 250.432 11.3585 279.072 12.5955C307.712 13.8325 343.99 20.4235 374.296 32.3825C404.602 44.3415 447.671 64.9474 469.519 89.6824C491.367 114.417 494.893 112.434 513.288 142.536C531.683 172.638 534.46 191.3 541.717 202.32C548.974 213.34 573.49 227.82 593.14 252.906C612.79 277.992 621.569 281.753 627.84 304.747C634.111 327.741 635.103 333.699 630.348 341.955C625.593 350.211 615.423 363.277 603.173 363.277C590.923 363.277 575.206 365.377 557.186 351.571C539.166 337.765 522.737 334.43 509.526 317.707C496.315 300.984 482.767 303.073 467.3 287.607C451.833 272.141 439.582 275.632 410.861 266.282C382.14 256.932 374.907 275.898 347.732 262.938C320.557 249.978 315.123 261.266 295.892 273.39C276.661 285.514 257.847 298.056 237.362 305.163C216.877 312.27 170.052 326.063 150.403 323.558C130.754 321.053 106.088 310.598 84.7663 324.812C63.4443 339.026 55.9193 343.625 47.5583 346.552C39.1973 349.479 40.0123 348.77 32.1103 341.662C24.2083 334.554 25.9743 334.052 18.4493 331.544C10.9243 329.036 2.36732 315.856 2.36732 315.856Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.2759 374.346C35.2715 371.814 34.4201 369.316 33.5931 366.89C31.9386 362.036 30.3819 357.469 27.8929 353.482C21.0359 342.5 25.5329 336.464 35.0239 330.966C40.8131 327.613 46.3002 323.723 51.7774 319.841L51.7779 319.84L51.78 319.839C52.8736 319.064 53.9668 318.289 55.0619 317.518C74.6839 303.718 94.7969 300.459 117.268 311.537C138.599 322.053 160.968 318.664 183.452 313.866C231.152 303.689 273.682 282.545 314.681 256.79C341.322 239.949 370.475 227.46 401.045 219.79C433.78 211.743 467.533 213.332 500.545 223.881C523.789 231.311 546.718 239.304 565.62 254.853C588.836 273.953 610.956 294.481 620.47 324.553C620.633 325.07 620.819 325.612 621.01 326.17C622.523 330.584 624.374 335.987 618.201 337.653C613.667 338.879 612.46 334.976 611.311 331.261C610.961 330.127 610.615 329.011 610.183 328.063C593.983 292.578 567.424 267.099 533.289 249.175C494.18 228.639 452.395 223.728 409.306 230.437C396.812 232.383 385.259 237.401 373.165 242.655C365.742 245.879 358.116 249.192 349.943 251.937C356.225 255.266 361.385 255.769 366.388 256.258L366.394 256.258C367.038 256.321 367.68 256.384 368.321 256.452C416.161 261.559 462.227 272.316 501.866 301.416C508.142 306.024 513.91 311.316 519.68 316.61L519.681 316.611C524.841 321.346 530.003 326.082 535.533 330.332C536.021 330.708 536.509 331.083 536.997 331.459C551.936 342.954 566.931 354.493 586.415 358.168C614.792 363.522 633.6 344.35 626.191 316.644C617.917 285.703 596.54 263.453 574.239 242.544C548.371 218.293 518.384 200.469 484.698 188.196C442.805 172.933 399.747 170.673 356.364 174.616C313.153 178.543 270.448 187.007 229.819 202.787C209.306 210.755 189.443 220.473 169.625 230.168L169.625 230.169C166.932 231.486 164.241 232.803 161.549 234.114C121.768 253.499 87.299 280.654 52.8394 307.803C47.3996 312.088 41.9601 316.374 36.4999 320.628C34.3528 322.302 32.7961 324.638 31.2213 327.001C28.3352 331.333 25.3884 335.755 18.6359 336.354C16.8772 325.305 24.3982 318.71 30.6849 313.198C31.1688 312.773 31.6454 312.355 32.1099 311.942C55.2289 291.383 78.6449 270.989 104.934 254.411C111.907 250.011 113.974 244.478 114.527 236.488C117.778 187.681 130.648 139.998 152.397 96.1824C154.771 91.3847 157.047 86.5364 159.324 81.6844C166.217 66.9968 173.126 52.2748 182.849 38.8144C124.649 60.5145 80.9209 98.8994 48.7789 152.041C16.5179 205.382 8.63489 263.792 11.2779 326.782C2.45589 321.79 2.07789 316.057 1.71089 310.215C-1.09911 265.427 3.88589 221.634 21.3479 180.107C38.6479 138.956 63.5829 102.922 98.3669 74.2534C124.749 52.5094 153.345 34.7244 186.34 24.7915C192.583 22.9123 194.664 18.0649 196.916 12.8177C197.061 12.4804 197.206 12.1414 197.354 11.8014C203.445 -2.24655 206.927 -3.02655 217.939 6.93145C223.417 11.8855 228.639 13.3184 236.366 11.8534C268.5 5.76345 300.513 7.16345 332.718 13.5435C403.797 27.6255 460.486 64.6185 504.659 120.884C522.187 143.211 535.832 168.412 543.927 196.084C546.607 205.152 552.331 213.018 560.133 218.358C589.977 239.722 614.046 266.019 630.227 299.272C637.527 314.272 640.132 330.831 632.055 344.537C622.313 361.07 607.009 370.364 584.855 366.47C566.812 363.299 552.068 355.77 538.303 344.87C533.35 340.948 528.461 336.938 523.573 332.928C503.259 316.264 482.958 299.611 458.147 289.347C418.418 272.733 375.575 264.878 332.537 266.318C318.917 266.769 307.397 274.167 296.062 281.445L296.061 281.445C293.341 283.192 290.631 284.932 287.906 286.567C247.422 310.845 202.506 321.422 156.784 329.431C147.067 331.131 137.078 329.592 127.668 326.772C120.182 324.528 116.568 327.544 113.716 333.727C103.494 355.865 95.6449 378.527 95.3949 403.367C95.3192 410.918 94.5972 418.46 93.8751 426.004C93.5007 429.916 93.1263 433.828 92.8419 437.741C92.3989 443.832 89.2599 447.302 83.1829 447.427C81.7023 447.458 80.218 447.52 78.7272 447.583H78.7268C72.5652 447.843 66.2939 448.107 59.7269 446.127C56.4589 431.108 51.1958 416.678 45.8427 402.001C42.5387 392.942 39.2005 383.79 36.2759 374.346ZM358.982 42.9464C324.776 27.3825 288.355 21.5754 251.3 20.5864C216.524 19.6584 192.455 38.4354 178.467 68.7394C175.889 74.3235 173.267 79.8883 170.646 85.4536C158.523 111.189 146.395 136.937 138.496 164.67C131.959 187.62 128.595 210.704 124.832 236.531L124.832 236.532C124.613 238.032 124.393 239.543 124.171 241.062C234.876 177.506 350.238 147.694 475.871 171.443C464.712 139.962 443.74 117.356 423.094 95.1016L423.094 95.1014C422.519 94.4819 421.945 93.8626 421.371 93.2435C403.661 74.1404 384.404 55.9954 358.982 42.9425V42.9464ZM389.871 46.6245C406.607 52.3235 422.076 60.0965 435.717 71.3394V71.3354C481.757 103.782 512.118 145.897 531.979 196.238C521.489 193.03 512.05 188.224 502.724 183.476C499.807 181.991 496.902 180.512 493.979 179.088C489.424 176.871 486.616 170.518 484.002 164.603C483.345 163.116 482.701 161.658 482.044 160.299C460.93 116.648 429.772 81.3394 392.298 51.1795C390.882 50.0721 390 48.4174 389.871 46.6245Z"
        fill={color}
      />
    </svg>
  );
};
