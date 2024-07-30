"use client";

import Image from "next/image";

// Components
import Box from "@/components/common/box";
import SocialMedia from "@/components/common/social-media";
import LoginForm from "@/components/pages/SignIn/LoginForm";
import { Lock } from "iconoir-react";

const SignIn = () => {
  return (
    <Box className={"grid h-[100dvh] grid-cols-12 grid-rows-12 bg-neutral-n10"}>
      <Box
        className={
          "relative col-start-3 col-end-11 row-start-3 grid min-h-[780px] rounded-[32px] bg-white p-[16px] shadow-sm"
        }
      >
        <div
          className={
            "absolute left-[49%] top-[5%] flex size-[40px] items-center justify-center rounded-full border border-neutral-n30 bg-white"
          }
        >
          <Lock />
        </div>
        <Box className="grid grid-cols-12 gap-6">
          <Box className={"col-start-1 col-end-7"}>
            <Box
              as={"section"}
              className={
                "flex h-[100%] flex-col items-center justify-between gap-8 p-[56px]"
              }
            >
              <Box>
                <Image
                  src={"/Logo_RapiMozo.png"}
                  alt={"RapiMozo"}
                  width={150}
                  height={30}
                  className={"w-full"}
                />
              </Box>
              <Box>
                <p
                  className={
                    "leading-display-small text-display-small font-bold"
                  }
                >
                  Get Started
                </p>
              </Box>
              <LoginForm />
              <SocialMedia />
            </Box>
          </Box>
          <Box
            className={
              "col-start-7 col-end-13 h-full w-full rounded-[24px] bg-rm"
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
export default SignIn;
