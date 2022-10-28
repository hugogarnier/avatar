import { Accessories1 } from "./Accessories1";
import { Accessories2 } from "./Accessories2";

export const Accessories = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "21%",
    position: "absolute",
    top: "-3%",
    left: "-2%",
    zIndex: 2,
  };
  switch (variant) {
    case 1:
      return <Accessories1 style={style} />;
    case 2:
      return <Accessories2 style={style} />;
    case 3:
    default:
      return <></>;
  }
};
