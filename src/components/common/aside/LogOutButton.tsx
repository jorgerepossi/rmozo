"use client";
import { Power } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const LogOutButton = () => {
  const router = useRouter();
  return (
    <div className={"flex h-10 items-center justify-center"}>
      <Button className={"bg-rm"} onClick={() => router.push("/signin")}>
        <Power size={20} />
      </Button>
    </div>
  );
};
export default LogOutButton;
