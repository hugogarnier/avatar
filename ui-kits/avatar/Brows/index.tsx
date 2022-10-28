import { Brows1 } from "./Brows1";
import { Brows2 } from "./Brows2";
import { Brows3 } from "./Brows3";
import { Brows4 } from "./Brows4";

export const Brows = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "13%",
    position: "absolute",
    top: "-5%",
    left: "-1%",
    zIndex: 2,
  };
  switch (variant) {
    case 1:
    default:
      return <Brows1 style={style} />;
    case 2:
      return <Brows2 style={style} />;
    case 3:
      return <Brows3 style={style} />;
    case 4:
      return <Brows4 style={style} />;
  }
};
