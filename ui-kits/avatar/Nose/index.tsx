import { Nose1 } from "./Nose1";
import { Nose2 } from "./Nose2";
import { Nose3 } from "./Nose3";

export const Nose = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "15%",
    position: "absolute",
    top: "8%",
    left: "3%",
    zIndex: 3,
  };
  switch (variant) {
    case 1:
    default:
      return <Nose1 style={style} />;
    case 2:
      return <Nose2 style={style} />;
    case 3:
      return <Nose3 style={style} />;
  }
};
