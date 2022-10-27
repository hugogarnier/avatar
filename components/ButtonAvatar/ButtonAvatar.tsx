import { useState } from "react";
import { motion } from "framer-motion";

type ButtonAvatarProps = {
  onClick: () => void;
  variant: number;
};

export const ButtonAvatar = ({ onClick, variant }: ButtonAvatarProps) => {
  const [isHovering, setIsHovering] = useState(false);
  console.log(
    "🚀 ~ file: ButtonAvatar.tsx ~ line 11 ~ ButtonAvatar ~ isHovering",
    isHovering
  );

  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <motion.p className="border-2 p-2">test</motion.p>
      <motion.button
        whileHover={{ scale: 1.2 }}
        onHoverStart={() => setIsHovering((prev) => !prev)}
        onHoverEnd={() => setIsHovering((prev) => !prev)}
        whileTap={{ scale: 0.8 }}
        onClick={onClick}
        className={
          "bg-gray-600 w-14 h-14 rounded-full text-lg text-white hover:bg-teal-600"
        }
      >
        {variant}
      </motion.button>
    </div>
  );
};
