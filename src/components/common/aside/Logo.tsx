import Link from "next/link";

const Logo = () => {
  return (
    <div className={"flex h-[64px] flex-col"}>
      <Link href={"/dashboard"}>
        <div className={"flex h-10 items-center justify-center"}>logo</div>
      </Link>
    </div>
  );
};
export default Logo;
