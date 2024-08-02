"use client";
import { Power } from "lucide-react";
import { useRouter } from "next/navigation";

import Box from "@/components/common/box";
import { Button } from "@/components/ui/button";

import useAuthStore from "@/store/auth";

const LogOutButton = () => {
  const router = useRouter();
  const { setLoginStatus } = useAuthStore();
  const handleLogOut = () => {
    setLoginStatus("idle");
    router.push("/signin");
  };
  return (
    <Box className={"flex h-10 items-center justify-center"}>
      <Button className={"bg-rm"} onClick={handleLogOut}>
        <Power size={20} />
      </Button>
    </Box>
  );
};
export default LogOutButton;
