import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const size = 200;
  return (
    <div className=" w-2/3 h-2/3 flex flex-col justify-between items-center p-40">
      <Link href="/notion" className="transition hover:text-teal-600 dark:hover:text-teal-500">
          NOTION AVATAR GENERATOR
      </Link>
      <Link href="/avatar" className="transition hover:text-teal-600 dark:hover:text-teal-500">
          AVATAR COLOR GENERATOR
      </Link>
    </div>
  );
};

export default Home;
