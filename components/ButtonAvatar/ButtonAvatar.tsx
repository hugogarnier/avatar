type ButtonAvatarProps = {
  onClick: () => void;
  variant: number;
};

export const ButtonAvatar = ({ onClick, variant }: ButtonAvatarProps) => {
  return (
    <button onClick={onClick} className={"bg-slate-500 w-14 h-14 rounded-full"}>
      {variant}
    </button>
  );
};
