import { Beard1 } from "./Beard1";

export const Beard = ({ variant }: { variant: number }) => {
  const style = {
    width: "100%",
    height: "30%",
    position: "absolute",
    top: "1%",
  };
  switch (variant) {
    case 1:
      return <Beard1 style={style} />;
    case 2:
      return <></>;
    case 3:
    default:
      return <></>;
  }
};
