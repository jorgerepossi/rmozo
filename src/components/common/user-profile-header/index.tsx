import { UserRound } from "lucide-react";

import Box from "@/components/common/box";

const UserProfileHeader = () => {
  return (
    <Box
      className={
        "flex items-center gap-[8px] rounded-full bg-neutral-n10 px-2 py-2"
      }
    >
      <Box className={"border-neutral-n100 rounded-full border p-2"}>
        <UserRound />
      </Box>
      <Box className={"flex flex-col items-start"}>
        <p className={"text-body-medium text-neutral-n60"}>@admin </p>
        <p className={"text-body-small text-neutral-n40"}>admin@rapimozo.com</p>
      </Box>
    </Box>
  );
};

export default UserProfileHeader;
