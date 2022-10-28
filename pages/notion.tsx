import type { NextPage } from "next";
import { useState } from "react";

import { handleNumber } from "../utils/functions";
import { ButtonAvatar, NotionAvatar } from "../components";

const Notion: NextPage = () => {
  const [bodyNumber, setBodyNumber] = useState<number>(1);
  const [hairNumber, setHairNumber] = useState<number>(1);
  const [eyesNumber, setEyesNumber] = useState<number>(2);
  const [browsNumber, setBrowsNumber] = useState<number>(1);
  const [noseNumber, setNoseNumber] = useState<number>(1);
  const [mouthNumber, setMouthNumber] = useState<number>(1);
  const [beardNumber, setBeardNumber] = useState<number>(3);
  const [handNumber, setHandNumber] = useState<number>(0);

  const buttonData = [
    {
      id: "Body",
      onClick: () => {
        setBodyNumber(handleNumber(bodyNumber, 3));
      },
      variant: bodyNumber,
    },
    {
      id: "Hair",
      onClick: () => {
        setHairNumber(handleNumber(hairNumber, 16));
      },
      variant: hairNumber,
    },
    {
      id: "Eyes",
      onClick: () => {
        setEyesNumber(handleNumber(eyesNumber, 3));
      },
      variant: eyesNumber,
    },
    {
      id: "Brows",
      onClick: () => {
        setBrowsNumber(handleNumber(browsNumber, 3));
      },
      variant: browsNumber,
    },
    {
      id: "Nose",
      onClick: () => {
        setNoseNumber(handleNumber(noseNumber, 3));
      },
      variant: noseNumber,
    },
    {
      id: "Mouth",
      onClick: () => {
        setMouthNumber(handleNumber(mouthNumber, 3));
      },
      variant: mouthNumber,
    },
    {
      id: "Beard",
      onClick: () => {
        setBeardNumber(handleNumber(beardNumber, 3));
      },
      variant: beardNumber,
    },
    {
      id: "Hand",
      onClick: () => {
        setHandNumber(handleNumber(handNumber, 10));
      },
      variant: handNumber,
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-wrap justify-between items-center w-64 gap-3 md:w-full">
        {buttonData.map(({ id, onClick, variant }) => (
          <ButtonAvatar key={id} onClick={onClick} variant={variant} id={id} />
        ))}
      </section>
      <NotionAvatar
        bodyNumber={bodyNumber}
        hairNumber={hairNumber}
        browsNumber={browsNumber}
        eyesNumber={eyesNumber}
        noseNumber={noseNumber}
        mouthNumber={mouthNumber}
        beardNumber={beardNumber}
        handNumber={handNumber}
      />
      <div className="flex mt-20">sddsqd</div>
    </section>
  );
};

export default Notion;
