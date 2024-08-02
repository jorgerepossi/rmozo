import { FacebookTag, Instagram, X } from "iconoir-react";

import Box from "@/components/common/box";

const SocialMedia = () => {
  return (
    <Box className="relative flex w-full justify-center">
      <Box className="flex w-full items-center justify-center gap-6 text-neutral-n40 before:h-px before:w-10 before:bg-neutral-n30 before:content-[''] after:top-4 after:h-px after:w-10 after:bg-neutral-n30 after:content-['']">
        <Box className="flex h-10 w-10 items-center justify-center rounded-full border border-current p-2 transition-all hover:bg-black hover:text-white">
          <Instagram />
        </Box>
        <Box className="flex h-10 w-10 items-center justify-center rounded-full border border-current p-2 transition-all hover:bg-black hover:text-white">
          <FacebookTag />
        </Box>
        <Box className="flex h-10 w-10 items-center justify-center rounded-full border border-current p-2 transition-all hover:bg-black hover:text-white">
          <X />
        </Box>
      </Box>
    </Box>
  );
};
export default SocialMedia;
