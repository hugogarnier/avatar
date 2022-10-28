import { Hair1 } from "./Hair1";
import { Hair2 } from "./Hair2";
import { Hair3 } from "./Hair3";
import { Hair4 } from "./Hair4";
import { Hair5 } from "./Hair5";
import { Hair6 } from "./Hair6";
import { Hair7 } from "./Hair7";
import { Hair8 } from "./Hair8";

export const Hair = ({ variant }: { variant: number }) => {
  const style = {
    width: "66%",
    height: "100%",
    position: "absolute",
    top: "-26%",
    left: "13%",
    zIndex: 2,
  };
  switch (variant) {
    case 1:
    default:
      return <Hair1 style={style} />;
    case 2:
      return <Hair2 style={style} />;
    case 3:
      return <Hair3 style={style} />;
    // case 4:
    //   return <Hair4 style={style} />;
    case 5:
      return <Hair5 style={style} />;
    case 6:
      return <Hair6 style={style} />;
    case 7:
      return <Hair7 style={style} />;
    case 8:
      return <Hair8 style={style} />;
  }
};
