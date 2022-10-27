import { Body1 } from "./Body1";

export const Body = ({ variant }: { variant: number }) => {
  const style = {
    width: "120%",
    height: "100%",
    position: "absolute",
    top: "42%",
    left: "-10%",
  };
  switch (variant) {
    case 1:
      return <Body1 style={style} variant={variant} />;
    case 2:
      return <Body1 style={style} variant={variant} />;
    case 3:
    default:
      return <></>;
  }
};
