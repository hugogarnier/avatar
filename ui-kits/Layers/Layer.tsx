import { ReactElement } from "react";

import * as LayerList from "./list";

export type LayerProps = {
  color?: string;
  name: keyof typeof LayerList;
  // style?: ViewStyle;
  height?: string | number;
  width?: string | number;
  className?: string;
};

export type LayerListProps = Omit<LayerProps, "name">;

export const Layer = ({
  name = "notionBase",
  ...props
}: LayerProps): ReactElement => {
  return (
    LayerList[name] && LayerList[name]({ ...props })
  );
};
