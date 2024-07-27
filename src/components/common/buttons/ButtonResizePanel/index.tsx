import { PanelRightOpen } from "lucide-react";

interface ButtonResizePanelProps {
  onClick: () => void;
}

const ButtonResizePanel = ({ onClick }: ButtonResizePanelProps) => {
  return (
    <div
      className={"bg-red absolute -right-4 -top-4 size-[24px] cursor-pointer"}
      onClick={onClick}
    >
      <PanelRightOpen className={"text-neutral-n30"} />
    </div>
  );
};
export default ButtonResizePanel;
