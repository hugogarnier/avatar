import {
  Accessories,
  Base,
  Beard,
  Body,
  Brows,
  Eyes,
  Hair,
  Hand,
  Mouth,
  Nose,
} from "../../ui-kits/notion";

type NotionAvatarProps = {
  bodyNumber: number;
  hairNumber: number;
  browsNumber: number;
  eyesNumber: number;
  noseNumber: number;
  mouthNumber: number;
  beardNumber: number;
  handNumber: number;
};
export const NotionAvatar = ({
  bodyNumber = 1,
  hairNumber = 1,
  browsNumber = 1,
  eyesNumber = 2,
  noseNumber = 1,
  mouthNumber = 1,
  beardNumber = 3,
  handNumber = 1,
}: NotionAvatarProps) => {
  return (
    <div className="w-48 h-48 flex justify-center items-center my-24 md:w-80 md:h-80">
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
          {(hairNumber > 16 && <Accessories />) || (
            <Hair variant={hairNumber} />
          )}

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
          </div>
          <Hand variant={handNumber} />
        </div>
      </div>
    </div>
  );
};
