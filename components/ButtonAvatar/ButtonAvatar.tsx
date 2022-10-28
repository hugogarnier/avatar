import { motion } from "framer-motion";

type ButtonAvatarProps = {
  onClick: () => void;
  variant: number;
  id: string;
};

export const ButtonAvatar = ({ onClick, variant, id }: ButtonAvatarProps) => {
  return (
    <div className="group flex flex-col justify-between items-center w-16">
      <div
        role="tooltip"
        className="inline-block invisible z-10 opacity-1 transition-opacity duration-500 mb-2 group-hover:visible"
      >
        <div className="py-2 px-3 bg-gray-600 rounded-lg">
          <h3 className=" text-white dark:text-white">{id}</h3>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClick}
        className={
          "bg-gray-600 w-14 h-14 rounded-full font-semibold text-white hover:bg-teal-600"
        }
      >
        {variant}
      </motion.button>
    </div>
  );
};
