import { EarRing1 } from "./EarRing1";
import { EarRing2 } from "./EarRing2";

export const EarRing = ({ variant }: { variant: number }) => {
  const style = {
    width: "20%",
    height: "5%",
    position: "absolute",
    top: "49%",
    left: "19%",
    zIndex: 2,
  };
  switch (variant) {
    case 1:
      return <EarRing1 style={style} />;
    case 2:
      return <EarRing2 style={style} />;
    case 3:
    default:
      return <></>;
  }
};
