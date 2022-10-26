import { Eyes1 } from "./Eyes1";
import { Eyes2 } from "./Eyes2";
import { Eyes3 } from "./Eyes3";

export const Eyes = ({ variant }: { variant: number }) => {
  switch (variant) {
    case 1:
      return <Eyes1 />;
    case 2:
      return <Eyes2 />;
    case 3:
    default:
      return <Eyes3 />;
  }
};
