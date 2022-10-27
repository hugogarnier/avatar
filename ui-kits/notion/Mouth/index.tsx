import { Mouth1 } from "./Mouth1";

export const Mouth = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "16%",
    position: "absolute",
    top: "7%",
    left: "3%",
  };
  switch (variant) {
    case 1:
      return <Mouth1 style={style} />;
    case 2:
      return <></>;
    case 3:
    default:
      return <></>;
  }
};
