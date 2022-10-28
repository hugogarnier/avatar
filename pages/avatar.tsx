import type { NextPage } from "next";
import { useState } from "react";

import { handleNumber } from "../utils/functions";
import { Avatar, ButtonAvatar } from "../components";

const Notion: NextPage = () => {
  const [accessoriesNumber, setAccessoriesNumber] = useState<number>(3);
  const [bodyNumber, setBodyNumber] = useState<number>(1);
  const [hairNumber, setHairNumber] = useState<number>(1);
  const [earNumber, setEarNumber] = useState<number>(0);
  const [earRingNumber, setEarRingNumber] = useState<number>(0);
  const [eyesNumber, setEyesNumber] = useState<number>(2);
  const [browsNumber, setBrowsNumber] = useState<number>(1);
  const [noseNumber, setNoseNumber] = useState<number>(1);
  const [mouthNumber, setMouthNumber] = useState<number>(2);
  const [beardNumber, setBeardNumber] = useState<number>(3);

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
        setHairNumber(handleNumber(hairNumber, 8));
      },
      variant: hairNumber,
    },
    {
      id: "Ear",
      onClick: () => {
        setEarNumber(handleNumber(earNumber, 2));
      },
      variant: earNumber,
    },
    {
      id: "Ring",
      onClick: () => {
        setEarRingNumber(handleNumber(earRingNumber, 2));
      },
      variant: earRingNumber,
    },
    {
      id: "Eyes",
      onClick: () => {
        setEyesNumber(handleNumber(eyesNumber, 4));
      },
      variant: eyesNumber,
    },
    {
      id: "Brows",
      onClick: () => {
        setBrowsNumber(handleNumber(browsNumber, 4));
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
        setMouthNumber(handleNumber(mouthNumber, 8));
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
      id: "Glasses",
      onClick: () => {
        setAccessoriesNumber(handleNumber(accessoriesNumber, 3));
      },
      variant: accessoriesNumber,
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <section className="flex flex-wrap justify-between items-center w-64 gap-3 md:w-full">
        {buttonData.map(({ id, onClick, variant }) => (
          <ButtonAvatar key={id} onClick={onClick} variant={variant} id={id} />
        ))}
      </section>
      <Avatar
        accessoriesNumber={accessoriesNumber}
        bodyNumber={bodyNumber}
        hairNumber={hairNumber}
        browsNumber={browsNumber}
        earNumber={earNumber}
        earRingNumber={earRingNumber}
        eyesNumber={eyesNumber}
        noseNumber={noseNumber}
        mouthNumber={mouthNumber}
        beardNumber={beardNumber}
      />
      <div className="flex mt-20">sddsqd</div>
    </section>
  );
};

export default Notion;
