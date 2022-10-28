import {
  Accessories,
  Base,
  Beard,
  Body,
  Brows,
  Ear,
  EarRing,
  Eyes,
  Hair,
  Mouth,
  Nose,
} from "../../ui-kits/avatar";

type NotionAvatarProps = {
  accessoriesNumber: number;
  bodyNumber: number;
  hairNumber: number;
  browsNumber: number;
  earNumber: number;
  earRingNumber: number;
  eyesNumber: number;
  noseNumber: number;
  mouthNumber: number;
  beardNumber: number;
};
export const Avatar = ({
  accessoriesNumber = 1,
  bodyNumber = 1,
  hairNumber = 1,
  browsNumber = 1,
  earNumber = 1,
  earRingNumber = 1,
  eyesNumber = 2,
  noseNumber = 1,
  mouthNumber = 1,
  beardNumber = 3,
}: NotionAvatarProps) => {
  return (
    <div className="w-48 h-48 flex justify-center items-center my-48 md:w-80 md:h-80 bg-slate-400">
      <div
        className=""
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "90%",
          }}
        >
          <Base />
          <Body variant={bodyNumber} />
          <Hair variant={hairNumber} />
          <Ear variant={earNumber} />
          <EarRing variant={earRingNumber} />

          {/* Face detail */}
          <div
            style={{
              position: "absolute",
              right: "-3%",
              top: "30%",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Brows variant={browsNumber} />
            <Eyes variant={eyesNumber} />
            <Nose variant={noseNumber} />
            <Mouth variant={mouthNumber} />
            <Beard variant={beardNumber} />
            <Accessories variant={accessoriesNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};
