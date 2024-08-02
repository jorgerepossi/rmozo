import React from "react";

import Image from "next/image";

import Box from "@/components/common/box";

const Heading = () => {
  return (
    <>
      <Box>
        <Image
          src={"/Logo_RapiMozo.png"}
          alt={"RapiMozo"}
          width={150}
          height={30}
          className={"w-full"}
        />
      </Box>
      <Box className={"flex w-full flex-col content-start items-start"}>
        <p
          className={
            "leading-display-small text-headline-small font-normal text-neutral-n40"
          }
        >
          Welcome to
        </p>
        <p
          className={
            "leading-display-small text-display-small font-bold text-neutral-n60"
          }
        >
          Rapimozo
        </p>
      </Box>
    </>
  );
};

export default Heading;
