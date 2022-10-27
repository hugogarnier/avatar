import { Hand1 } from "./Hand1";
import { Hand10 } from "./Hand10";

export const Hand = ({ variant }: { variant: number }) => {
  const style1 = {
    width: "131%",
    height: "100%",
    position: "absolute",
    top: "28%",
    left: "8%",
  };
  const style2 = {
    width: "130%",
    height: "101%",
    position: "absolute",
    top: "28%",
    left: "-14%",
  };
  switch (variant) {
    case 0:
    default:
      return <></>;
    case 1:
      return <Hand1 style={style1} />;
    case 3:
      return <></>;
    case 10:
      return <Hand10 style={style2} />;
  }
};
