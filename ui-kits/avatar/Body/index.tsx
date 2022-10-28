import { Body1 } from "./Body1";
import { Body2 } from "./Body2";
import { Body3 } from "./Body3";

export const Body = ({ variant }: { variant: number }) => {
  switch (variant) {
    case 1:
      return <Body1 />;
    case 2:
      return <Body2 />;
    case 3:
    default:
      return <Body3 />;
  }
};
