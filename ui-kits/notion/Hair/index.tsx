import { Hair1 } from "./Hair1";
import { Hair10 } from "./Hair10";
import { Hair11 } from "./Hair11";
import { Hair12 } from "./Hair12";
import { Hair13 } from "./Hair13";
import { Hair14 } from "./Hair14";
import { Hair15 } from "./Hair15";
import { Hair2 } from "./Hair2";
import { Hair3 } from "./Hair3";
import { Hair4 } from "./Hair4";
import { Hair5 } from "./Hair5";
import { Hair6 } from "./Hair6";
import { Hair7 } from "./Hair7";
import { Hair8 } from "./Hair8";
import { Hair9 } from "./Hair9";

export const Hair = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "-27%",
    left: "-3%",
    zIndex: 11,
  };
  switch (variant) {
    case 1:
    default:
      return <Hair1 style={style} />;
    case 2:
      return <Hair2 style={style} />;
    case 3:
      return <Hair3 style={style} />;
    case 4:
      return <Hair4 style={style} />;
    case 5:
      return <Hair5 style={style} />;
    case 6:
      return <Hair6 style={style} />;
    case 7:
      return <Hair7 style={style} />;
    case 8:
      return <Hair8 style={style} />;
    case 9:
      return <Hair9 style={style} />;
    case 10:
      return <Hair10 style={style} />;
    case 11:
      return <Hair11 style={style} />;
    case 12:
      return <Hair12 style={style} />;
    case 13:
      return <Hair13 style={style} />;
    case 14:
      return <Hair14 style={style} />;
    case 15:
      return <Hair15 style={style} />;
  }
};
