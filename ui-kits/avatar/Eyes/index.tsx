import { Eyes1 } from "./Eyes1";
import { Eyes2 } from "./Eyes2";
import { Eyes3 } from "./Eyes3";
import { Eyes4 } from "./Eyes4";

export const Eyes = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "15%",
    position: "absolute",
    top: "1%",
    zIndex: 2,
  };
  switch (variant) {
    case 1:
      return <Eyes1 style={style} />;
    case 2:
    default:
      return <Eyes2 style={style} />;
    case 3:
      return <Eyes3 style={style} />;
    case 4:
      return <Eyes4 style={style} />;
  }
};
