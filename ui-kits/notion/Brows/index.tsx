import { Brows1 } from "./Brows1";
import { Brows2 } from "./Brows2";

export const Brows = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "7%",
    position: "absolute",
    top: "-11%",
    left: "7%",
  };
  switch (variant) {
    case 1:
      return <Brows1 style={style} />;
    case 2:
      return <Brows2 style={style} />;
    case 3:
    default:
      return <></>;
  }
};
