import { Ear1 } from "./Ear1";
import { Ear2 } from "./Ear2";

export const Ear = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "15%",
    position: "absolute",
    top: "38%",
    left: "-20%",
    zIndex: 3,
  };
  switch (variant) {
    case 1:
    default:
      return <Ear1 style={style} />;
    case 2:
      return <Ear2 style={style} />;
  }
};
