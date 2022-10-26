import { Eyes1 } from "./Eyes1";
import { Eyes2 } from "./Eyes2";
import { Eyes3 } from "./Eyes3";

export const Eyes = ({ variant }: { variant: number }) => {
  const size = 200;
  switch (variant) {
    case 1:
      return (
        <Eyes1
          width={size / 1.8181}
          height={size / 1.8181}
          className="absolute top-0 left-[3.2rem]"
        />
      );
    case 2:
      return (
        <Eyes2
          width={size / 1.8181}
          height={size / 1.8181}
          className="absolute top-0 left-[3.2rem]"
        />
      );
    case 3:
    default:
      return (
        <Eyes3
          width={size / 1.8181}
          height={size / 1.8181}
          className="absolute top-0 left-[3.2rem]"
        />
      );
  }
};
