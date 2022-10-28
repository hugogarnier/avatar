import { Beard1 } from "./Beard1";
import { Beard2 } from "./Beard2";

export const Beard = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "55%",
    position: "absolute",
    top: "1%",
    left: "2%",
    zIndex: 2,
  };
  switch (variant) {
    case 1:
      return <Beard1 style={style} />;
    case 2:
      return <Beard2 style={style} />;
    case 3:
    default:
      return <></>;
  }
};
