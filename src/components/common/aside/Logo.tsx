import Link from "next/link";

import Box from "@/components/common/box";

const Logo = () => {
  return (
    <Box className={"flex flex-col"}>
      <Link href={"/dashboard"}>
        <Box className={"flex h-10 items-center justify-center"}>logo</Box>
      </Link>
    </Box>
  );
};
export default Logo;
