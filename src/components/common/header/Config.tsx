import { Settings } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Config = () => {
  return (
    <Popover>
      <PopoverTrigger className={"border-neutral-n100 rounded-full border p-2"}>
        <Settings />
      </PopoverTrigger>
      <PopoverContent className={"w-[auto]"}>
        <div>Config</div>
        <div>Config</div>
      </PopoverContent>
    </Popover>
  );
};
export default Config;
