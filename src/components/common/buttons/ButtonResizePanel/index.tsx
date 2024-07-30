import { PanelRightOpen } from "lucide-react";

interface ButtonResizePanelProps {
  onClick: () => void;
}

const ButtonResizePanel = ({ onClick }: ButtonResizePanelProps) => {
  return (
    <div
      className={
        "bg-red absolute -right-5 -top-4 flex size-[30px] cursor-pointer items-center justify-center border"
      }
      onClick={onClick}
    >
      <PanelRightOpen className={"text-neutral-n30"} />
    </div>
  );
};
export default ButtonResizePanel;
