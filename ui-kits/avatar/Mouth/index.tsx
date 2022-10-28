import { Mouth1 } from "./Mouth1";
import { Mouth2 } from "./Mouth2";
import { Mouth3 } from "./Mouth3";
import { Mouth4 } from "./Mouth4";
import { Mouth5 } from "./Mouth5";
import { Mouth6 } from "./Mouth6";
import { Mouth7 } from "./Mouth7";
import { Mouth8 } from "./Mouth8";

export const Mouth = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "15%",
    position: "absolute",
    top: "24%",
    left: "3%",
    zIndex: 3,
  };
  switch (variant) {
    case 1:
    default:
      return <Mouth1 style={style} />;
    case 2:
      return <Mouth2 style={style} />;
    case 3:
      return <Mouth3 style={style} />;
    case 4:
      return <Mouth4 style={style} />;
    case 5:
      return <Mouth5 style={style} />;
    case 6:
      return <Mouth6 style={style} />;
    case 7:
      return <Mouth7 style={style} />;
    case 8:
      return <Mouth8 style={style} />;
  }
};
