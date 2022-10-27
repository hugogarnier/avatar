import { Eyes1 } from "./Eyes1";
import { Eyes2 } from "./Eyes2";
import { Eyes3 } from "./Eyes3";

export const Eyes = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "17%",
    position: "absolute",
    top: "-10%",
    zIndex: 10,
  };
  switch (variant) {
    case 1:
      return <Eyes1 style={style} />;
    case 2:
    default:
      return <Eyes2 style={style} />;
    case 3:
      return <Eyes3 style={style} />;
  }
};
