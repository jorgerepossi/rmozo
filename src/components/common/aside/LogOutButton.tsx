import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const LogOutButton = () => {
  return (
    <div className={"flex h-10 items-center justify-center"}>
      <Button className={"bg-rm"}>
        {" "}
        <Power size={20} />
      </Button>
    </div>
  );
};
export default LogOutButton;
