import { Nose1 } from "./Nose1";

export const Nose = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "21%",
    position: "absolute",
    top: "-10%",
    left: "7%",
  };
  switch (variant) {
    case 1:
      return <Nose1 style={style} />;
    case 2:
      return <></>;
    case 3:
    default:
      return <></>;
  }
};
