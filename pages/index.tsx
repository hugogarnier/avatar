import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const size = 200;
  return (
    <div className=" w-2/3 h-2/3 flex flex-col justify-between items-center p-40">
      <Link href="/notion">
        <a
          className="transition hover:text-teal-600 dark:hover:text-teal-500"
          href=""
        >
          NOTION AVATAR GENERATOR
        </a>
      </Link>
      <Link href="/avatar">
        <a
          className="transition hover:text-teal-600 dark:hover:text-teal-500"
          href=""
        >
          AVATAR COLOR GENERATOR
        </a>
      </Link>
    </div>
  );
};

export default Home;
