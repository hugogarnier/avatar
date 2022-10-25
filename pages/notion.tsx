import type { NextPage } from "next";

import { Layer } from "../ui-kits/Layers";

const Notion: NextPage = () => {
  const size = 200;
  return (
    <div className=" w-2/3 h-2/3 flex flex-col justify-between items-center p-40">
      <div className="z-50 relative">
        <Layer name="notionBase" width={size} height={size} />
        <Layer
          name="notionBody1"
          width={size * 1.25}
          height={size}
          className="absolute -bottom-[5.05rem] -right-[1.60rem]"
        />
        <Layer
          name="notionEyes1"
          width={size / 1.8181}
          height={size / 1.8181}
          className="absolute top-0 left-[3.2rem]"
        />
        {/* <Layer
          name="notionAccessories1"
          width={size / 1.538461}
          height={size / 1.538461}
          className="absolute -top-[3.2rem] left-[3.1rem]"
        /> */}
        <Layer
          name="notionHair1"
          width={size}
          height={size}
          className="absolute -top-[3.3rem] -left-[0.65rem]"
        />
        <Layer
          name="notionBrows1"
          width={size / 2.857142}
          height={size / 2.857142}
          className="absolute top-[0.3rem] left-[5.5rem]"
        />
        <Layer
          name="notionNose1"
          width={size / 4}
          height={size / 4}
          className="absolute top-[2rem] left-[6rem]"
        />
        <Layer
          name="notionMouth1"
          width={size / 4}
          height={size / 4}
          className="absolute top-[4.1rem] left-[5.5rem]"
        />
        <Layer
          name="notionBeard1"
          width={size / 2.5}
          height={size / 2.5}
          className="absolute top-[3.26rem] left-[4.1rem]"
        />
      </div>
    </div>
  );
};

export default Notion;
