"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

// Components
import Box from "@/components/common/box";
import SocialMedia from "@/components/common/social-media";
import Heading from "@/components/pages/SignIn/_components/Heading";
import LoginForm from "@/components/pages/SignIn/_components/LoginForm";
import LoginStatusIndicator from "@/components/pages/SignIn/_components/LoginStatusIndicator";

import useAuthStore from "@/store/auth";

const SignIn = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();
  const { loginStatus } = useAuthStore();

  useEffect(() => {
    if (loginStatus === "success") {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loginStatus]);

  useEffect(() => {
    if (animationComplete && loginStatus === "success") {
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    }
  }, [animationComplete, loginStatus, router]);

  return (
    <Box className="flex h-[100dvh] items-center justify-center bg-neutral-n10">
      <Box className="relative h-[760px] w-[1200px] rounded-[32px] bg-white p-[16px] shadow-sm">
        <LoginStatusIndicator loginStatus={loginStatus} />
        <Box className="grid h-full grid-cols-12 gap-6">
          <Box className="col-start-1 col-end-7">
            <Box
              as="section"
              className="flex h-[100%] flex-col items-center justify-between gap-8 px-[56px] pb-[56px] pt-[24px]"
            >
              <Heading />
              <LoginForm />
              <SocialMedia />
            </Box>
          </Box>
          <Box className="col-start-7 col-end-13 h-full w-full rounded-[24px] bg-rm" />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
